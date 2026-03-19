/**
 * NOP-CHAOS 集成桥接层
 *
 * 最小改动原则：
 * - 仅通过 postMessage 与父窗口通信
 * - 不修改 Hoppscotch 核心代码
 * - 方便合并官方更新
 *
 * 消息协议:
 * {
 *   type: 'init' | 'getConfig' | 'updateConfig' | 'getCurl' | 'getShareUrl' | 'test'
 *   payload?: any
 *   id: string  // 唯一消息ID，用于响应匹配
 * }
 */

import { onMounted, onUnmounted } from 'vue'

// 消息类型定义
export type MessageType = 'init' | 'getConfig' | 'updateConfig' | 'getCurl' | 'getShareUrl' | 'test'
export type MessageId = string

export interface NopMessage<T = any> {
  type: MessageType
  payload?: T
  id: MessageId
}

export interface NopResponse<T = any> {
  id: MessageId
  success: boolean
  data?: T
  error?: string
}

// 配置格式
export interface ApiRequestConfig {
  id?: string
  name: string
  description?: string
  method: HttpMethod
  url: string
  headers: Array<{ key: string; value: string; enabled: boolean }>
  params: Array<{ key: string; value: string; enabled: boolean }>
  body?: {
    type: 'none' | 'json' | 'form-data' | 'raw' | 'graphql'
    content?: string
  }
  auth?: {
    type: 'none' | 'basic' | 'bearer' | 'api-key'
    config?: any
  }
}

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS'
  | 'CONNECT'
  | 'TRACE'

// 消息处理器映射
const messageHandlers = new Map<MessageType, (payload: any, id: MessageId) => Promise<any>>()

let isEmbedded = false
let sourceWindow: Window | null = null
let currentConfig: Partial<ApiRequestConfig> = {}

/**
 * 初始化 NOP 集成桥接
 */
export function initNopBridge() {
  // 检查是否被嵌入
  isEmbedded = window.self !== window.top

  if (!isEmbedded) {
    console.log('[NOP Bridge] Running in standalone mode')
    return
  }

  console.log('[NOP Bridge] Initializing embedded mode')

  // 监听来自父窗口的消息
  window.addEventListener('message', handleMessage)

  // 注册默认处理器
  registerMessageHandler('init', handleInit)
  registerMessageHandler('getConfig', handleGetConfig)
  registerMessageHandler('updateConfig', handleUpdateConfig)
  registerMessageHandler('getCurl', handleGetCurl)
  registerMessageHandler('getShareUrl', handleGetShareUrl)
  registerMessageHandler('test', handleTest)

  // 通知父窗口已就绪
  sendResponse({ id: 'ready', success: true, data: { status: 'ready' } })
}

/**
 * 处理消息
 */
async function handleMessage(event: MessageEvent<NopMessage>) {
  const { type, payload, id } = event.data

  // 安全检查：验证消息来源
  if (!isValidOrigin(event.origin)) {
    console.warn('[NOP Bridge] Invalid origin:', event.origin)
    return
  }

  sourceWindow = event.source as Window

  console.log('[NOP Bridge] Received message:', type, payload)

  try {
    const handler = messageHandlers.get(type)
    if (handler) {
      const result = await handler(payload, id)
      sendResponse({ id, success: true, data: result })
    } else {
      sendResponse({ id, success: false, error: `Unknown message type: ${type}` })
    }
  } catch (error) {
    console.error('[NOP Bridge] Error handling message:', error)
    sendResponse({ id, success: false, error: error instanceof Error ? error.message : String(error) })
  }
}

/**
 * 发送响应
 */
function sendResponse(response: NopResponse) {
  if (!sourceWindow || !sourceWindow.postMessage) {
    return
  }

  sourceWindow.postMessage(response, '*')
}

/**
 * 验证来源
 */
function isValidOrigin(origin: string): boolean {
  // 从环境变量获取允许的来源
  const allowedOriginsEnv = import.meta.env.VITE_NOP_ALLOWED_ORIGINS || ''
  const allowedOrigins = allowedOriginsEnv.split(',').map(o => o.trim())

  if (allowedOrigins.includes(origin)) {
    return true
  }

  // 开发环境允许所有来源
  if (import.meta.env.DEV) {
    return true
  }

  return false
}

/**
 * 注册消息处理器
 */
export function registerMessageHandler(
  type: MessageType,
  handler: (payload: any, id: string) => Promise<any>
) {
  messageHandlers.set(type, handler)
}

/**
 * 处理初始化
 */
async function handleInit(payload: any, id: string) {
  console.log('[NOP Bridge] Initializing with config:', payload)
  currentConfig = payload || {}
  return { status: 'initialized', config: currentConfig }
}

/**
 * 获取当前配置
 */
async function handleGetConfig(payload: any, id: string) {
  console.log('[NOP Bridge] Getting current config')

  // 从当前配置返回
  const config: ApiRequestConfig = {
    name: currentConfig.name || 'Sample Request',
    method: currentConfig.method || 'GET',
    url: currentConfig.url || '',
    headers: currentConfig.headers || [],
    params: currentConfig.params || [],
    body: currentConfig.body || { type: 'none' },
    auth: currentConfig.auth || { type: 'none' }
  }

  return config
}

/**
 * 更新配置
 */
async function handleUpdateConfig(payload: ApiRequestConfig, id: string) {
  console.log('[NOP Bridge] Updating config:', payload)
  currentConfig = payload
  return { success: true }
}

/**
 * 获取 Curl 命令
 */
async function handleGetCurl(payload: any, id: string) {
  console.log('[NOP Bridge] Generating curl command')

  const curlCommand = generateCurlFromConfig(currentConfig)

  return { curl: curlCommand }
}

/**
 * 获取分享链接
 */
async function handleGetShareUrl(payload: any, id: string) {
  console.log('[NOP Bridge] Generating share URL')

  const shareUrl = generateShareUrlFromConfig(currentConfig)

  return { shareUrl }
}

/**
 * 测试请求
 */
async function handleTest(payload: any, id: string) {
  console.log('[NOP Bridge] Testing request')

  // 这里应该执行实际的HTTP请求
  // 暂时返回模拟数据
  return {
    status: 200,
    statusText: 'OK',
    responseTime: 150,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ message: 'Test response' }, null, 2)
  }
}

/**
 * 从配置生成 Curl 命令
 */
function generateCurlFromConfig(config: Partial<ApiRequestConfig>): string {
  const parts: string[] = []

  // 基本命令
  parts.push(`curl -X ${config.method || 'GET'}`)

  // URL
  parts.push(`'${config.url || ''}'`)

  // Headers
  const headers = config.headers?.filter(h => h.enabled) || []
  if (headers.length > 0) {
    headers.forEach(header => {
      parts.push(`  -H '${header.key}: ${header.value}'`)
    })
  }

  // Query Parameters
  const params = config.params?.filter(p => p.enabled) || []
  if (params.length > 0) {
    const queryString = params
      .map(p => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`)
      .join('&')
    parts.push(`  -G`)
    params.forEach(param => {
      parts.push(`  --data-urlencode '${param.key}=${param.value}'`)
    })
  }

  // Body
  if (config.body && config.body.type !== 'none' && config.body.content) {
    parts.push(`  -d '${config.body.content}'`)
  }

  // Auth
  if (config.auth) {
    switch (config.auth.type) {
      case 'basic':
        if (config.auth.config?.username && config.auth.config?.password) {
          parts.push(`  -u '${config.auth.config.username}:${config.auth.config.password}'`)
        }
        break
      case 'bearer':
        if (config.auth.config?.token) {
          const prefix = config.auth.config.prefix || 'Bearer'
          parts.push(`  -H 'Authorization: ${prefix} ${config.auth.config.token}'`)
        }
        break
      case 'api-key':
        if (config.auth.config?.key && config.auth.config?.value) {
          parts.push(`  -H '${config.auth.config.key}: ${config.auth.config.value}'`)
        }
        break
    }
  }

  return parts.join(' \\\n')
}

/**
 * 从配置生成分享链接
 */
function generateShareUrlFromConfig(config: Partial<ApiRequestConfig>): string {
  // 构建分享数据
  const shareData = {
    v: 1,
    t: 'req',
    d: {
      name: config.name || 'Request',
      request: {
        method: config.method,
        url: config.url,
        headers: config.headers,
        params: config.params,
        body: config.body,
        auth: config.auth
      }
    }
  }

  // 转换为 JSON
  const json = JSON.stringify(shareData)

  // Base64 URL-safe 编码
  const encoded = btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  // 生成分享链接
  return `https://hoppscotch.io/r/${encoded}`
}

/**
 * 清理
 */
export function destroyNopBridge() {
  window.removeEventListener('message', handleMessage)
  messageHandlers.clear()
  sourceWindow = null
  isEmbedded = false
}

// 导出供外部使用
export { isEmbedded, sourceWindow, currentConfig }