import { computed, toRefs } from 'composition-api'

export default function useStyle (props, context, dependencies)
{
  const { width, height, speed, offBackground, onBackground, offColor,
          onColor, fontSize, handleBackground, } = toRefs(props)

  // ============== COMPUTED ==============

  const cssVars = computed(() => {
    let cssVars = {
      '--toggle-off-background': offBackground.value,
      '--toggle-on-background': onBackground.value,
      '--toggle-off-color': offColor.value,
      '--toggle-on-color': onColor.value,
      '--toggle-handle-background': handleBackground.value,
      '--toggle-height': height.value + 'px',
      '--toggle-width': width.value + 'px',
      '--toggle-speed': (speed.value / 1000) + 's',
      '--toggle-radius': (height.value / 2) + 'px',
      '--toggle-handle-size': (height.value - 6) + 'px',
      '--toggle-handle-right-on': (height.value - 3) + 'px',
      '--toggle-font-size': fontSize.value,
    }

    return cssVars
  })

  return {
    cssVars,
  }
}