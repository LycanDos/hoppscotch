# NOP-CHAOS 集成定制说明

## 概述

本目录包含用于将 Hoppscotch 集成到 NOP-CHAOS 项目的定制代码。

## 设计原则

1. **最小改动原则**：仅添加必要的桥接代码，不修改 Hoppscotch 核心功能
2. **易于更新原则**：使用独立的文件和模块，方便合并官方更新
3. **功能隔离原则**：所有集成功能集中在 `nop-integration` 目录下

## 文件结构

```
nop-integration/
├── README.md                    # 本说明文件
├── nop-bridge.ts                # 通信桥接核心
├── types.ts                     # 类型定义
└── integration-patch.ts         # 集成补丁（应用到主入口）
```

## 集成方式

### 1. 通信机制

使用 `postMessage` API 实现 iframe 嵌入时的双向通信：

- **NOP-CHAOS → Hoppscotch**：发送初始化配置、更新配置、获取Curl等请求
- **Hoppscotch → NOP-CHAOS**：返回配置、Curl命令、分享链接等响应

### 2. 消息协议

```typescript
// 请求消息
{
  type: 'init' | 'getConfig' | 'updateConfig' | 'getCurl' | 'getShareUrl' | 'test',
  payload?: any,
  id: string  // 消息ID，用于响应匹配
}

// 响应消息
{
  id: string,
  success: boolean,
  data?: any,
  error?: string
}
```

## 应用方法

### 方法1：手动应用（推荐用于开发）

在 `hoppscotch-selfhost-web/src/main.ts` 文件末尾添加：

```typescript
// 初始化 NOP-CHAOS 集成
if (import.meta.env.DEV || import.meta.env.VITE_ENABLE_NOP_INTEGRATION === 'true') {
  import('./nop-integration/integration-patch')
}
```

### 方法2：使用 git patch（推荐用于生产）

```bash
# 创建补丁文件
cd /Volumes/Doc/Git/Nop/third_party/Hoppscotch
git diff HEAD packages/hoppscotch-selfhost-web/src/main.ts > nop-integration/main.patch

# 应用补丁
git apply nop-integration/main.patch
```

## 环境变量配置

在项目根目录创建 `.env` 文件：

```env
# 启用 NOP-CHAOS 集成
VITE_ENABLE_NOP_INTEGRATION=true

# 允许的父窗口来源（逗号分隔）
VITE_NOP_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

## 功能支持

1. **配置导入**：从外部初始化请求配置
2. **配置导出**：获取当前编辑的请求配置
3. **Curl 生成**：生成当前请求的 curl 命令
4. **分享链接**：生成 Hoppscotch 分享链接
5. **请求测试**：执行当前配置的请求

## 更新维护

### Hoppscotch 官方更新后

1. 拉取最新代码：`git pull origin main`
2. 检查是否有冲突：
   - 如果 `main.ts` 有冲突，只保留 `import('./nop-integration/integration-patch')` 这一行
   - 其他冲突按正常流程处理
3. 重新应用集成代码

### 扩展新功能

1. 在 `types.ts` 中添加新的消息类型
2. 在 `nop-bridge.ts` 中实现对应的处理器
3. 在 `integration-patch.ts` 中注册新处理器

## 注意事项

1. **安全性**：生产环境必须配置 `VITE_NOP_ALLOWED_ORIGINS`，限制允许的父窗口来源
2. **性能**：避免频繁的消息传递，批量处理数据
3. **兼容性**：确保与 Hoppscotch 官方版本兼容，定期测试

## 测试

在 NOP-CHAOS 项目中测试集成：

```typescript
import { HoppscotchEmbed } from '@nop-chaos/nop-hoppscotch'

<HoppscotchEmbed
  hoppscotchUrl="http://localhost:3000"
  :initialConfig="{ method: 'GET', url: 'https://api.example.com' }"
  @ready="handleReady"
  @error="handleError"
/>
```

## 联系方式

如有问题，请联系 NOP-CHAOS 项目维护者。