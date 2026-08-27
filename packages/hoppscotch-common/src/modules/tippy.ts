import { HoppModule } from "."
import VueTippy, { roundArrow, setDefaultProps } from "vue-tippy"

import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale-subtle.css"
import "tippy.js/dist/border.css"
import "tippy.js/dist/svg-arrow.css"

function installPopoverWheelHandler() {
  document.addEventListener(
    "wheel",
    (event) => {
      const target = event.target
      const content =
        target instanceof Element
          ? target.closest<HTMLElement>(".tippy-content")
          : null
      if (!content) return

      const delta =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? event.deltaY * 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? event.deltaY * content.clientHeight
            : event.deltaY
      const maxScrollTop = content.scrollHeight - content.clientHeight
      const nextScrollTop = Math.max(
        0,
        Math.min(maxScrollTop, content.scrollTop + delta)
      )
      if (
        content.scrollHeight <= content.clientHeight ||
        nextScrollTop === content.scrollTop
      )
        return

      event.preventDefault()
      content.scrollTop = nextScrollTop
    },
    { capture: true, passive: false }
  )
}

export type TippyState = {
  isEnabled: boolean
  isVisible: boolean
  isDestroyed: boolean
  isMounted: boolean
  isShown: boolean
}

export default <HoppModule>{
  onVueAppInit(app) {
    app.use(VueTippy)
    installPopoverWheelHandler()

    setDefaultProps({
      animation: "scale-subtle",
      appendTo: document.body,
      allowHTML: false,
      animateFill: false,
      arrow: roundArrow + roundArrow,
      popperOptions: {
        // https://popper.js.org/docs/v2/utils/detect-overflow/
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "document",
            },
          },
        ],
      },
    })
  },
}
