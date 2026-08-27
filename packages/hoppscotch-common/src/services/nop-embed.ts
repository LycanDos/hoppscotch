import { ref, shallowRef } from "vue"

export const nopEmbedConnected = ref(false)
export const nopEmbedSave = shallowRef<(() => void) | null>(null)
export const nopEmbedCancel = shallowRef<(() => void) | null>(null)

export function setNopEmbedActions(actions: {
  save: () => void
  cancel: () => void
}) {
  nopEmbedSave.value = actions.save
  nopEmbedCancel.value = actions.cancel
  nopEmbedConnected.value = true
}

export function clearNopEmbedActions() {
  nopEmbedConnected.value = false
  nopEmbedSave.value = null
  nopEmbedCancel.value = null
}
