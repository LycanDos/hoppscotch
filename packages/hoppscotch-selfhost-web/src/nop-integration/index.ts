/**
 * NOP-CHAOS 集成入口
 *
 * 该文件用于初始化 NOP 桥接层
 * 在 main.ts 中引入此文件即可启用集成
 */

import { initNopBridge } from './nop-bridge'

// 检查是否启用集成
const enableIntegration = import.meta.env.VITE_ENABLE_NOP_INTEGRATION === 'true'

if (enableIntegration) {
  console.log('[NOP Integration] Initializing...')
  initNopBridge()
} else {
  console.log('[NOP Integration] Disabled')
}