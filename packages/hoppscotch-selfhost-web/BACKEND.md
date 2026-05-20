# Hoppscotch 自托管后端说明

## 概述

Hoppscotch 自托管后端是一个 Node.js/Prisma 服务，运行在 `3170` 端口，提供 GraphQL API 和 REST API。它是可选的 —— Hoppscotch 核心 HTTP 客户端功能完全可以在不启动后端的情况下正常工作。

## 后端提供的功能

### 1. 用户认证 (Auth)
- 邮箱魔法链接登录 (`/auth/signin`)
- GitHub/Google/Microsoft OAuth 登录
- Token 刷新 (`/auth/refresh`)
- 用户信息查询 (GraphQL `me` 查询)
- 登出 (`/auth/logout`)

### 2. 设置同步 (Settings)
- 用户偏好设置持久化存储（主题、快捷键、代理等）
- 多设备设置同步
- 设置变更实时推送 (GraphQL Subscription)

### 3. 集合管理 (Collections)
- REST 和 GraphQL 请求集合的 CRUD
- 集合文件夹结构管理
- 请求的创建/更新/删除/移动
- 集合排序、复制
- 多设备实时同步 (GraphQL Subscription)

### 4. 历史记录同步 (History)
- 请求历史记录的持久化存储
- 历史记录星标标记
- 历史记录搜索
- 多设备历史记录同步

### 5. 环境变量 (Environments)
- 环境变量持久化存储
- 全局环境变量管理
- 多设备环境同步

### 6. 其他功能
- Mock 服务器（模拟 API）
- Shortcode 短链接分享
- Admin 管理后台 (`3100` 端口)

## 不启动后端的影响

以下功能不可用：
- ❌ 用户登录/登出
- ❌ 设置、集合、历史记录、环境变量的云端持久化
- ❌ 多设备数据同步
- ❌ Mock 服务器
- ❌ 短链接分享

以下功能完全正常：
- ✅ HTTP 请求发送（GET/POST/PUT/DELETE 等）
- ✅ GraphQL 请求发送
- ✅ WebSocket/SSE 实时连接测试
- ✅ Socket.IO 连接测试
- ✅ MQTT 连接测试
- ✅ 本地集合管理（新建、编辑、删除、导出、导入）
- ✅ 本地历史记录
- ✅ 本地环境变量
- ✅ 全部主题和 UI 设置
- ✅ 代码生成 (Code Snippet)
- ✅ Pre-request Script / Test Script
- ✅ 代理设置
- ✅ iframe 嵌入模式（NOP-CHAOS 集成）

## 何时不需要后端

- **NOP-CHAOS iframe 嵌入场景**：只需要 HTTP 请求编辑和发送功能，数据由 NOP 平台管理
- **单机/本地使用场景**：不需要跨设备同步
- **开发/调试场景**：只需要快速调试 API
- **演示/展示场景**：不需要持久化用户数据

## 如何禁用后端

在 `.env` 中设置环境变量：

```env
VITE_DISABLE_BACKEND=true
```

此设置会跳过所有后端初始化调用（认证、同步等），使 Hoppscotch 完全离线运行，但仍然保留完整的 HTTP 客户端功能。

## 架构说明

```
┌─────────────────────────────────────────────────┐
│                  NOP-CHAOS (8100)                │
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │          Hoppscotch iframe                   │ │
│  │                                              │ │
│  │  ┌──────────────┐    ┌──────────────────┐   │ │
│  │  │  HTTP Client  │    │  Platform Sync    │   │ │
│  │  │  (核心功能)    │    │  (可选, 走后端)   │   │ │
│  │  └──────────────┘    └──────────────────┘   │ │
│  │                                              │ │
│  │  ┌──────────────────────────────────┐        │ │
│  │  │  NOP Bridge (postMessage 通信)    │        │ │
│  │  └──────────────────────────────────┘        │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌──────────────────┐  ┌──────────────────────┐  │
│  │   NOP 后端        │  │  Hoppscotch 后端(可选) │  │
│  │   (3170?)         │  │  (3170)               │  │
│  └──────────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────┘
```

Hoppscotch 后端与 NOP 平台无关。iframe 嵌入模式下，所有数据通过 `postMessage` 与父窗口（NOP-CHAOS）交互，不需要 Hoppscotch 后端。

## 相关环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `VITE_BACKEND_GQL_URL` | GraphQL API 地址 | `http://localhost:3170/graphql` |
| `VITE_BACKEND_WS_URL` | WebSocket 地址 | `ws://localhost:3170/graphql` |
| `VITE_BACKEND_API_URL` | REST API 地址 | `http://localhost:3170/v1` |
| `VITE_DISABLE_BACKEND` | 禁用后端集成 | 未设置时为 `false` |
