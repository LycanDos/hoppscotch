<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <!-- 顶部工具栏（仅在直连嵌入或独立模式时显示） -->
    <div
      v-if="showToolbar"
      class="flex items-center gap-2 px-4 py-2 border-b border-divider bg-primary flex-shrink-0"
    >
      <span class="text-sm font-semibold flex-1 text-secondaryDark">
        API 请求配置 — Hoppscotch
      </span>
      <button
        class="px-4 py-1.5 rounded text-sm font-medium text-white border-0 cursor-pointer hover:opacity-90"
        style="background: #52c41a"
        @click="saveConfig"
      >
        保存配置
      </button>
      <button
        class="px-4 py-1.5 rounded text-sm font-medium bg-primaryLight text-secondaryDark border border-divider cursor-pointer hover:opacity-90"
        @click="cancelEdit"
      >
        取消
      </button>
    </div>

    <!-- REST 请求编辑器（复用 Hoppscotch 原生组件） -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <HttpRequest v-model="tab" />

      <AppPaneLayout layout-id="embed-rest" class="flex-1 min-h-0">
        <template #primary>
          <HttpRequestOptions
            v-model="tab.document.request"
            v-model:option-tab="tab.document.optionTabPreference!"
            v-model:inherited-properties="tab.document.inheritedProperties"
          />
        </template>
        <template #secondary>
          <HttpResponse
            v-model:document="tab.document"
            :tab-id="tab.id"
            :is-embed="true"
          />
        </template>
      </AppPaneLayout>
    </div>

    <!-- 状态栏 -->
    <div
      class="flex items-center gap-3 px-4 py-1 border-t border-divider text-xs text-secondaryDark bg-primary flex-shrink-0"
    >
      <span
        class="inline-block w-2 h-2 rounded-full"
        :class="{
          'bg-green-500': connected,
          'bg-blue-500': synced && connected,
          'bg-gray-300': !connected,
        }"
      />
      <span>{{ statusText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue"
import { getDefaultRESTRequest } from "~/helpers/rest/default"
import { HoppTab } from "~/services/tab"
import { HoppRequestDocument } from "~/helpers/rest/document"

// ---- 嵌入协议状态 ----
const connected = ref(false)
const synced = ref(false)
const statusText = ref("等待初始化...")
let parentWindow: Window | null = null
let parentOrigin = "*"
let surfaceId = "request"
let mounted = false
const isDirectEmbed = ref(false) // 直连嵌入：BPMN 直接加载本页面
const showToolbar = computed(() => !isEmbedded.value || isDirectEmbed.value)

const isEmbedded = computed(() => window.self !== window.top)

// ---- 消息缓冲（在组件 mount 前的消息暂存） ----
interface BufferedMessage {
  event: MessageEvent
  type: string
  data: any
  payload: Record<string, any>
}
const messageBuffer: BufferedMessage[] = []

// ---- 尽早建立事件监听 ----
// 在 script setup 阶段立即添加监听，确保不丢失任何消息
window.addEventListener("message", rawMessageHandler)

function rawMessageHandler(event: MessageEvent) {
  const { type, data, ...payload } = event.data || {}

  if (!mounted) {
    messageBuffer.push({ event, type, data, payload })
    return
  }

  processMessage(event, type, data, payload)
}

// ---- 创建 REST Tab ----
const tab = ref<HoppTab<HoppRequestDocument>>({
  id: "embed-1",
  document: {
    type: "request",
    request: getDefaultRESTRequest(),
    response: null,
    isDirty: false,
    optionTabPreference: "params",
  },
})

// ---- 配置格式映射 ----

function platformConfigToHoppscotch(platformConfig: Record<string, any>) {
  const request = getDefaultRESTRequest()

  if (platformConfig.method) request.method = platformConfig.method.toUpperCase()
  if (platformConfig.url) request.endpoint = platformConfig.url
  if (platformConfig.name) request.name = platformConfig.name

  if (Array.isArray(platformConfig.headers)) {
    request.headers = platformConfig.headers.map((h: any) => ({
      key: h.key ?? "",
      value: h.value ?? "",
      active: h.enabled !== undefined ? h.enabled : h.active ?? true,
    }))
  }

  if (Array.isArray(platformConfig.params)) {
    request.params = platformConfig.params.map((p: any) => ({
      key: p.key ?? "",
      value: p.value ?? "",
      active: p.enabled !== undefined ? p.enabled : p.active ?? true,
    }))
  }

  if (platformConfig.body) {
    const body = platformConfig.body
    if (body.type === "none" || !body.type) {
      request.body.contentType = null
      request.body.body = null
    } else if (body.type === "json") {
      request.body.contentType = "application/json"
      request.body.body = body.content ?? ""
    } else if (body.type === "form-data") {
      request.body.contentType = "multipart/form-data"
      request.body.body = body.content ?? ""
    } else if (body.type === "raw") {
      request.body.contentType = "text/plain"
      request.body.body = body.content ?? ""
    } else {
      request.body.contentType = body.type
      request.body.body = body.content ?? ""
    }
    if (request.body.contentType === "xml") {
      request.body.contentType = "application/xml"
    }
  }

  return request
}

function hoppscotchToPlatformConfig(request: any): Record<string, any> {
  const config: Record<string, any> = {
    method: request.method ?? "GET",
    url: request.endpoint ?? "",
  }

  if (Array.isArray(request.headers)) {
    config.headers = request.headers.map((h: any) => ({
      key: h.key ?? "",
      value: h.value ?? "",
      enabled: h.active ?? true,
    }))
  }

  if (Array.isArray(request.params)) {
    config.params = request.params.map((p: any) => ({
      key: p.key ?? "",
      value: p.value ?? "",
      enabled: p.active ?? true,
    }))
  }

  const ct = request.body?.contentType
  const bodyContent = request.body?.body
  if (ct && bodyContent !== null && bodyContent !== undefined && bodyContent !== "") {
    if (ct.includes("json")) {
      config.body = { type: "json", content: bodyContent }
    } else if (ct.includes("xml")) {
      config.body = { type: "xml", content: bodyContent }
    } else if (ct.includes("multipart")) {
      config.body = { type: "form-data", content: bodyContent }
    } else if (ct.includes("text")) {
      config.body = { type: "raw", content: bodyContent }
    } else {
      config.body = { type: "raw", content: bodyContent }
    }
  } else {
    config.body = { type: "none", content: "" }
  }

  if (request.auth && request.auth.authType !== "inherit") {
    config.auth = {
      type: request.auth.authType,
      authActive: request.auth.authActive,
    }
    if (request.auth.username) config.auth.username = request.auth.username
    if (request.auth.password) config.auth.password = request.auth.password
    if (request.auth.token) config.auth.token = request.auth.token
  }

  return config
}

function getCurrentConfig(): Record<string, any> {
  return hoppscotchToPlatformConfig(tab.value.document.request)
}

function applyPlatformConfig(platformConfig: Record<string, any>, msgSurfaceId?: string) {
  if (msgSurfaceId) surfaceId = msgSurfaceId
  tab.value.document.request = platformConfigToHoppscotch(platformConfig)
  tab.value.document.isDirty = false
  connected.value = true
  synced.value = true
  statusText.value = "Hoppscotch 已同步"
}

// ---- postMessage 处理 ----

function postToParent(msg: Record<string, any>) {
  try {
    if (parentWindow) {
      parentWindow.postMessage(msg, parentOrigin)
    }
  } catch (e) {
    console.warn("[Embed] postMessage failed:", e)
  }
}

function processMessage(
  event: MessageEvent,
  type: string,
  data: any,
  payload: Record<string, any>
) {
  // 对于桥接协议消息，始终记录/更新父窗口引用
  // 不能仅首次设置，因为 Hoppscotch 内部也有 postMessage 通信，
  // 首次消息可能来自扩展拦截器等内部模块，而非 editor/index.html
  if (type === "init" || type === "hoppscotch:config") {
    if (event.source) {
      parentWindow = event.source as Window
      parentOrigin = event.origin
    }
  }

  switch (type) {
    case "init": {
      try {
        isDirectEmbed.value = true
        const platformConfig = payload.config || JSON.parse(payload.configJson || "{}")
        applyPlatformConfig(platformConfig, payload.surfaceId)
        postToParent({ type: "ready" })
      } catch (e: any) {
        postToParent({ type: "error", message: e.message })
      }
      break
    }

    // editor/index.html → Hoppscotch 使用 hoppscotch:config
    case "hoppscotch:config": {
      if (data) {
        applyPlatformConfig(data)
      }
      break
    }
  }
}

// 监听 tab 变化，实时同步到父窗口
watch(
  () => tab.value.document.request,
  () => {
    if (connected.value) {
      synced.value = true
      statusText.value = "Hoppscotch 已同步"
      postToParent({
        type: "hoppscotch:config",
        data: getCurrentConfig(),
      })
    }
  },
  { deep: true }
)

// ---- 保存 / 取消 ----

function saveConfig() {
  const config = getCurrentConfig()
  postToParent({
    type: "saved",
    surfaceId,
    configJson: JSON.stringify(config),
  })
}

function cancelEdit() {
  postToParent({ type: "canceled" })
}

// ---- 生命周期 ----

onMounted(() => {
  mounted = true

  if (window.self !== window.top) {
    statusText.value = "等待父窗口初始化..."
  } else {
    connected.value = true
    synced.value = true
    statusText.value = "独立模式 — 可正常编辑"
  }

  // 处理 module 级缓冲消息（组件 create 阶段收到的）
  while (messageBuffer.length > 0) {
    const { event, type, data, payload } = messageBuffer.shift()!
    processMessage(event, type, data, payload)
  }

  // 处理 index.html 早期缓冲消息（Vue 加载前收到的）
  if (Array.isArray((window as any).__embedMessageBuffer)) {
    const earlyBuf = (window as any).__embedMessageBuffer as MessageEvent[]
    while (earlyBuf.length > 0) {
      const event = earlyBuf.shift()!
      const { type, data, ...payload } = event.data || {}
      processMessage(event, type, data, payload)
    }
  }
  (window as any).__embedMessageReady = true
})

onUnmounted(() => {
  mounted = false
  window.removeEventListener("message", rawMessageHandler)
})
</script>

<route lang="yaml">
meta:
  layout: empty
</route>

<style scoped>
:deep(.splitpanes) {
  height: 100% !important;
}

:deep(.splitpanes__splitter) {
  position: relative;
}
</style>
