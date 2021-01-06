import { ref, computed, toRefs } from 'composition-api'

export default function useStyle (props, context, dependencies)
{
  const { width, height, speed, colors, fontSize } = toRefs(props)

  // ================ DATA ================

  // no export
  const defaultColors = ref({
    background: {
      on: '#41b883',
      off: '#d4e0e7',
      disabled: '#d4e0e7',
    },
    text: {
      on: '#ffffff',
      off: '#80878c',
      disabled: '#80878c',
    },
    handle: {
      on: '#ffffff',
      off: '#ffffff',
      disabled: '#f2faff',
    },
  })

  // ============== COMPUTED ==============

  // no export
  const cssColors = computed(() => {
    let cssColors = Object.assign({}, defaultColors.value)

    if (colors.value.background) {
      cssColors.background = Object.assign({}, cssColors.background, colors.value.background)
    }

    if (colors.value.text) {
      cssColors.text = Object.assign({}, cssColors.text, colors.value.text)
    }

    if (colors.value.handle) {
      cssColors.handle = Object.assign({}, cssColors.handle, colors.value.handle)
    }

    return cssColors
  })

  const cssVars = computed(() => {
    let cssVars = {
      '--toggle-off-background': cssColors.value.background.off,
      '--toggle-on-background': cssColors.value.background.on,
      '--toggle-disabled-background': cssColors.value.background.disabled,
      '--toggle-off-text-color': cssColors.value.text.off,
      '--toggle-on-text-color': cssColors.value.text.on,
      '--toggle-disabled-text-color': cssColors.value.text.disabled,
      '--toggle-on-handle-color': cssColors.value.handle.on,
      '--toggle-off-handle-color': cssColors.value.handle.off,
      '--toggle-disabled-handle-color': cssColors.value.handle.disabled,
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