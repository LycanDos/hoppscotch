<template>
  <div class="flex h-screen w-screen flex-col">
    <div class="min-h-0 flex-1">
      <Splitpanes class="no-splitter h-full" :dbl-click-splitter="false" horizontal>
        <Pane v-if="!platform.ui?.appHeader?.hidden?.value" style="height: auto">
          <AppHeader />
        </Pane>
        <Pane :class="spacerClass" class="flex flex-1 !overflow-hidden md:mb-0">
          <Splitpanes
            class="no-splitter"
            :dbl-click-splitter="false"
            :horizontal="!mdAndLarger"
          >
            <Pane
              style="width: auto; height: auto"
              class="hidden !overflow-auto md:flex md:flex-col"
            >
              <AppSidenav />
            </Pane>
            <Pane
              v-if="showOrgSidebar"
              style="width: auto; height: auto"
              class="hidden !overflow-auto md:flex md:flex-col"
            >
              <component
                :is="platform.organization.customOrganizationSidebarComponent"
              />
            </Pane>
            <!-- Changed to !overflow-auto to allow organization sidebar and main content to scroll independently -->
            <Pane class="flex flex-1 !overflow-auto">
              <Splitpanes
                class="no-splitter"
                :dbl-click-splitter="false"
                horizontal
              >
                <Pane class="flex min-h-0 flex-1 !overflow-hidden">
                  <main
                    class="flex min-h-0 w-full flex-1 overflow-auto"
                    role="main"
                  >
                    <RouterView
                      v-slot="{ Component }"
                      class="flex min-w-0 flex-1"
                    >
                      <Transition name="fade" mode="out-in" appear>
                        <component :is="Component" />
                      </Transition>
                    </RouterView>
                  </main>
                </Pane>
              </Splitpanes>
            </Pane>
          </Splitpanes>
        </Pane>
        <Pane v-if="mdAndLarger" style="height: auto">
          <AppFooter />
        </Pane>
        <Pane
          v-else
          style="height: auto"
          class="fixed inset-x-0 bottom-0 z-10 flex flex-col !overflow-auto"
        >
          <AppSidenav />
        </Pane>
      </Splitpanes>
    </div>
    <AppActionHandler />
    <AppSpotlight :show="showSearch" @hide-modal="showSearch = false" />
    <AppSupport
      v-if="mdAndLarger"
      :show="showSupport"
      @hide-modal="showSupport = false"
    />
    <AppOptions v-else :show="showSupport" @hide-modal="showSupport = false" />

    <!-- Let additional stuff be registered -->
    <template
      v-for="(component, index) in rootExtensionComponents"
      :key="index"
    >
      <component :is="component" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useSetting } from "@composables/settings"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import { useService } from "dioc/vue"
import { Pane, Splitpanes } from "splitpanes"
import "splitpanes/dist/splitpanes.css"
import {
  computed,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  watch,
} from "vue"
import { RouterView, useRoute, useRouter } from "vue-router"

import { useI18n } from "~/composables/i18n"
import { useToast } from "~/composables/toast"
import { InvocationTriggers, defineActionHandler } from "~/helpers/actions"
import { hookKeybindingsListener } from "~/helpers/keybindings"
import { getDefaultRESTRequest } from "~/helpers/rest/default"
import { applySetting, toggleSetting } from "~/newstore/settings"
import { platform } from "~/platform"
import { HoppSpotlightSessionEventData } from "~/platform/analytics"
import { PersistenceService } from "~/services/persistence"
import { SpotlightService } from "~/services/spotlight"
import { RESTTabService } from "~/services/tab/rest"
import { UIExtensionService } from "~/services/ui-extension.service"
import {
  clearNopEmbedActions,
  setNopEmbedActions,
} from "~/services/nop-embed"

const router = useRouter()
const route = useRoute()

const showSearch = ref(false)
const showSupport = ref(false)

const expandNavigation = useSetting("EXPAND_NAVIGATION")
const rightSidebar = useSetting("SIDEBAR")
const columnLayout = useSetting("COLUMN_LAYOUT")

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greater("md")

const toast = useToast()
const t = useI18n()

const persistenceService = useService(PersistenceService)
const spotlightService = useService(SpotlightService)
const uiExtensionService = useService(UIExtensionService)
const tabs = useService(RESTTabService)

const rootExtensionComponents = uiExtensionService.rootUIExtensionComponents

const HAS_OPENED_SPOTLIGHT = useSetting("HAS_OPENED_SPOTLIGHT")

// Show organization sidebar if organization switching is enabled and sidebar component is provided
const showOrgSidebar = computed(() => {
  return (
    platform.organization?.organizationSwitchingEnabled === true &&
    platform.organization.customOrganizationSidebarComponent
  )
})

// ---- NOP iframe 编辑桥接 ----
const isNopEmbedded = typeof window !== "undefined" && window.self !== window.top
const nopBridgeConnected = ref(false)
const nopParentWindow = shallowRef<Window | null>(null)
let nopParentOrigin = "*"
let nopSurfaceId = "request"

const isRestRoute = computed(() => route.path === "/")
const pendingNopConfig = shallowRef<Record<string, any> | null>(null)

function cloneNopValue<T>(value: T): T {
  if (value === undefined) return value
  try {
    return JSON.parse(JSON.stringify(value)) as T
  } catch {
    return {} as T
  }
}

function postNopMessage(message: Record<string, any>) {
  const parent = nopParentWindow.value
  if (!parent) return

  parent.postMessage(cloneNopValue(message), nopParentOrigin)
}

function platformConfigToHoppscotch(platformConfig: Record<string, any>) {
  const request: any = getDefaultRESTRequest()

  if (platformConfig.method)
    request.method = String(platformConfig.method).toUpperCase()
  if (platformConfig.url) request.endpoint = platformConfig.url
  if (platformConfig.name) request.name = platformConfig.name
  if (platformConfig.description !== undefined) {
    request.description = platformConfig.description
  }

  if (Array.isArray(platformConfig.headers)) {
    request.headers = platformConfig.headers.map((header: any) => ({
      key: header.key ?? "",
      value: header.value ?? "",
      active:
        header.enabled !== undefined ? header.enabled : header.active ?? true,
    }))
  }

  if (Array.isArray(platformConfig.params)) {
    request.params = platformConfig.params.map((param: any) => ({
      key: param.key ?? "",
      value: param.value ?? "",
      active:
        param.enabled !== undefined ? param.enabled : param.active ?? true,
    }))
  }

  if (Array.isArray(platformConfig.requestVariables)) {
    request.requestVariables = platformConfig.requestVariables
  }
  if (typeof platformConfig.preRequestScript === "string") {
    request.preRequestScript = platformConfig.preRequestScript
  }
  if (typeof platformConfig.testScript === "string") {
    request.testScript = platformConfig.testScript
  }

  const body = platformConfig.body
  if (!body || body.type === "none") {
    request.body = { contentType: null, body: null }
  } else if (body.type === "json") {
    request.body = { contentType: "application/json", body: body.content ?? "" }
  } else if (body.type === "xml") {
    request.body = { contentType: "application/xml", body: body.content ?? "" }
  } else if (body.type === "form-data") {
    request.body = {
      contentType: "multipart/form-data",
      body: Array.isArray(body.content) ? body.content : [],
    }
  } else if (body.type === "urlencoded") {
    request.body = {
      contentType: "application/x-www-form-urlencoded",
      body: body.content ?? "",
    }
  } else {
    request.body = { contentType: "text/plain", body: body.content ?? "" }
  }

  const auth = platformConfig.auth
  if (!auth || auth.type === "inherit") {
    request.auth = { authType: "inherit", authActive: auth?.authActive ?? true }
  } else if (auth.type === "none") {
    request.auth = { authType: "none", authActive: auth.authActive ?? true }
  } else if (auth.type === "basic") {
    request.auth = {
      authType: "basic",
      authActive: auth.authActive ?? true,
      username: auth.username ?? auth.config?.username ?? "",
      password: auth.password ?? auth.config?.password ?? "",
    }
  } else if (auth.type === "bearer") {
    request.auth = {
      authType: "bearer",
      authActive: auth.authActive ?? true,
      token: auth.token ?? auth.config?.token ?? "",
    }
  } else if (auth.type === "api-key") {
    request.auth = {
      authType: "api-key",
      authActive: auth.authActive ?? true,
      key: auth.key ?? auth.config?.key ?? "",
      value: auth.value ?? auth.config?.value ?? "",
      addTo: auth.addTo ?? auth.config?.addTo ?? "HEADERS",
    }
  }

  return request
}

function hoppscotchToPlatformConfig(request: any): Record<string, any> {
  const config: Record<string, any> = {
    method: request.method ?? "GET",
    url: request.endpoint ?? "",
    name: request.name ?? "",
    description: request.description ?? "",
  }

  if (Array.isArray(request.headers)) {
    config.headers = request.headers.map((header: any) => ({
      key: header.key ?? "",
      value: header.value ?? "",
      enabled: header.active ?? true,
    }))
  }
  if (Array.isArray(request.params)) {
    config.params = request.params.map((param: any) => ({
      key: param.key ?? "",
      value: param.value ?? "",
      enabled: param.active ?? true,
    }))
  }
  if (Array.isArray(request.requestVariables)) {
    config.requestVariables = cloneNopValue(request.requestVariables)
  }
  if (request.preRequestScript) config.preRequestScript = request.preRequestScript
  if (request.testScript) config.testScript = request.testScript

  const bodyType = request.body?.contentType
  if (!bodyType) {
    config.body = { type: "none", content: "" }
  } else if (bodyType === "application/json" || bodyType.includes("json")) {
    config.body = { type: "json", content: request.body.body ?? "" }
  } else if (bodyType === "application/xml" || bodyType === "text/xml") {
    config.body = { type: "xml", content: request.body.body ?? "" }
  } else if (bodyType === "multipart/form-data") {
    config.body = {
      type: "form-data",
      content: cloneNopValue(request.body.body ?? []),
    }
  } else if (bodyType === "application/x-www-form-urlencoded") {
    config.body = { type: "urlencoded", content: request.body.body ?? "" }
  } else {
    config.body = { type: "raw", content: request.body.body ?? "" }
  }

  const auth = request.auth
  if (auth && auth.authType !== "inherit") {
    config.auth = {
      ...cloneNopValue(auth),
      type: auth.authType,
      authActive: auth.authActive ?? true,
    }
    delete config.auth.authType
  } else {
    config.auth = { type: "inherit", authActive: true }
  }

  return config
}

function applyNopTheme(theme: Record<string, any> | undefined) {
  if (!theme) return
  applySetting("BG_COLOR", theme.mode === "dark" ? "dark" : "light")

  const rootStyle = document.documentElement.style
  const values: Record<string, string | undefined> = {
    "--nop-host-primary": theme.primary,
    "--nop-host-primary-foreground": theme.primaryForeground,
    "--nop-host-background": theme.background,
    "--nop-host-foreground": theme.foreground,
    "--nop-host-border": theme.border,
    "--nop-host-muted": theme.muted,
  }
  for (const [name, value] of Object.entries(values)) {
    if (value) rootStyle.setProperty(name, value)
  }
}

function applyNopConfig(config: Record<string, any>) {
  const currentTab = tabs.currentActiveTab.value
  if (!isRestRoute.value || !currentTab || currentTab.document.type !== "request") {
    pendingNopConfig.value = cloneNopValue(config)
    return
  }

  currentTab.document.request = platformConfigToHoppscotch(config)
  currentTab.document.isDirty = false
  tabs.updateTab(currentTab)
  pendingNopConfig.value = null
}

function getCurrentNopConfig() {
  const currentTab = tabs.currentActiveTab.value
  return currentTab?.document.type === "request"
    ? hoppscotchToPlatformConfig(currentTab.document.request)
    : {}
}

function processNopMessage(event: MessageEvent) {
  const message =
    typeof event.data === "string"
      ? (() => {
          try {
            return JSON.parse(event.data)
          } catch {
            return {}
          }
        })()
      : event.data
  const { type, data, ...payload } = message || {}

  if (type === "init") {
    if (!event.source) return

    nopParentWindow.value = event.source as Window
    nopParentOrigin = event.origin
    nopSurfaceId = payload.surfaceId || "request"
    applyNopTheme(payload.theme)

    let config = payload.config
    if (!config && payload.configJson) {
      try {
        config = JSON.parse(payload.configJson)
      } catch {
        config = {}
      }
    }
    applyNopConfig(config || {})
    nopBridgeConnected.value = true
    setNopEmbedActions({
      save: saveNopConfig,
      cancel: cancelNopEdit,
    })
    postNopMessage({ type: "ready" })
    return
  }

  if (!nopParentWindow.value || event.source !== nopParentWindow.value) return
  if (nopParentOrigin !== "*" && event.origin !== nopParentOrigin) return

  if (type === "theme") {
    applyNopTheme(data || payload.theme)
  } else if (type === "hoppscotch:config" && data) {
    applyNopConfig(data)
  }
}

function saveNopConfig() {
  postNopMessage({
    type: "saved",
    surfaceId: nopSurfaceId,
    configJson: JSON.stringify(getCurrentNopConfig()),
  })
}

function cancelNopEdit() {
  postNopMessage({ type: "canceled" })
}

function handleNopEscapeKey(event: KeyboardEvent) {
  if (event.key !== "Escape") return

  if (showSearch.value) return

  event.preventDefault()
  event.stopPropagation()
  cancelNopEdit()
}

function onNopMessage(event: MessageEvent) {
  if (isNopEmbedded) processNopMessage(event)
}

watch(
  () => tabs.currentActiveTab.value?.document,
  () => {
    if (!isRestRoute.value || !nopBridgeConnected.value) return
    postNopMessage({
      type: "hoppscotch:config",
      data: getCurrentNopConfig(),
    })
  },
  { deep: true }
)

watch(
  () => route.path,
  () => {
    if (!isRestRoute.value || !pendingNopConfig.value) return

    applyNopConfig(pendingNopConfig.value)
    postNopMessage({
      type: "hoppscotch:config",
      data: getCurrentNopConfig(),
    })
  }
)

onMounted(() => {
  if (!isNopEmbedded) return

  window.addEventListener("message", onNopMessage)
  window.addEventListener("keydown", handleNopEscapeKey, true)

  const bufferedMessages = (window as any).__embedMessageBuffer
  if (Array.isArray(bufferedMessages)) {
    while (bufferedMessages.length > 0) {
      processNopMessage(bufferedMessages.shift())
    }
  }
})

onUnmounted(() => {
  if (isNopEmbedded) {
    window.removeEventListener("message", onNopMessage)
    window.removeEventListener("keydown", handleNopEscapeKey, true)
    clearNopEmbedActions()
  }
})

onBeforeMount(() => {
  if (!mdAndLarger.value) {
    rightSidebar.value = false
    columnLayout.value = true
  }
})

onMounted(async () => {
  const cookiesAllowed =
    (await persistenceService.getLocalConfig("cookiesAllowed")) === "yes"
  const platformAllowsCookiePrompts =
    platform.platformFeatureFlags.promptAsUsingCookies ?? true

  if (!cookiesAllowed && platformAllowsCookiePrompts) {
    toast.show(`${t("app.we_use_cookies")}`, {
      duration: 0,
      action: [
        {
          text: `${t("action.learn_more")}`,
          onClick: async (_, toastObject) => {
            await persistenceService.setLocalConfig("cookiesAllowed", "yes")
            toastObject.goAway(0)
            window
              .open("https://docs.hoppscotch.io/support/privacy", "_blank")
              ?.focus()
          },
        },
        {
          text: `${t("action.dismiss")}`,
          onClick: async (_, toastObject) => {
            await persistenceService.setLocalConfig("cookiesAllowed", "yes")
            toastObject.goAway(0)
          },
        },
      ],
    })
  }
})

watch(mdAndLarger, () => {
  if (mdAndLarger.value) rightSidebar.value = true
  else {
    rightSidebar.value = false
    columnLayout.value = true
  }
})
const spacerClass = computed(() =>
  expandNavigation.value ? "spacer-small" : "spacer-expand"
)

defineActionHandler("modals.search.toggle", (_, trigger) => {
  const triggerMethodMap: Record<
    InvocationTriggers,
    HoppSpotlightSessionEventData["method"]
  > = {
    keypress: "keyboard-shortcut",
    mouseclick: "click-spotlight-bar",
  }
  spotlightService.setAnalyticsData({
    method: triggerMethodMap[trigger as InvocationTriggers],
  })

  showSearch.value = !showSearch.value
  !HAS_OPENED_SPOTLIGHT.value && toggleSetting("HAS_OPENED_SPOTLIGHT")
})

defineActionHandler("modals.support.toggle", () => {
  showSupport.value = !showSupport.value
})

defineActionHandler("navigation.jump.rest", () => {
  router.push({ path: "/" })
})

defineActionHandler("navigation.jump.graphql", () => {
  router.push({ path: "/graphql" })
})

defineActionHandler("navigation.jump.realtime", () => {
  router.push({ path: "/realtime" })
})

defineActionHandler("navigation.jump.settings", () => {
  router.push({ path: "/settings" })
})

defineActionHandler("navigation.jump.profile", () => {
  router.push({ path: "/profile" })
})

defineActionHandler("settings.theme.system", () => {
  applySetting("BG_COLOR", "system")
})

defineActionHandler("settings.theme.light", () => {
  applySetting("BG_COLOR", "light")
})

defineActionHandler("settings.theme.dark", () => {
  applySetting("BG_COLOR", "dark")
})

defineActionHandler("settings.theme.black", () => {
  applySetting("BG_COLOR", "black")
})

hookKeybindingsListener()
</script>

<style lang="scss" scoped>
.spacer-small {
  margin-bottom: 4.2rem;
}

.spacer-medium {
  margin-bottom: 4.8rem;
}

.spacer-large {
  margin-bottom: 5.5rem;
}

.spacer-expand {
  margin-bottom: 2.9rem;
}

@media screen and (min-width: 768px) {
  .spacer-small {
    margin-bottom: 0;
  }

  .spacer-medium {
    margin-bottom: 0;
  }

  .spacer-large {
    margin-bottom: 0;
  }

  .spacer-expand {
    margin-bottom: 0;
  }
}
</style>
