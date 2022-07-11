import { computed, toRefs } from 'vue'

export default function useClasses (props, context, dependencies)
{
  const refs = toRefs(props)
  const disabled = refs.disabled

  // ============ DEPENDENCIES ============

  const checked = dependencies.checked

  // ============== COMPUTED ==============

  const classes = computed(() => ({
    container: 'toggle-container',
    toggle: 'toggle',
    toggleOn: 'toggle-on',
    toggleOff: 'toggle-off',
    toggleOnDisabled: 'toggle-on-disabled',
    toggleOffDisabled: 'toggle-off-disabled',
    handle: 'toggle-handle',
    handleOn: 'toggle-handle-on',
    handleOff: 'toggle-handle-off',
    handleOnDisabled: 'toggle-handle-on-disabled',
    handleOffDisabled: 'toggle-handle-off-disabled',
    label: 'toggle-label',
    ...refs.classes.value,
  }))

  const classList = computed(() => {
    return {
      container: classes.value.container,
      toggle: [
        classes.value.toggle,
        disabled.value
          ? (checked.value ? classes.value.toggleOnDisabled : classes.value.toggleOffDisabled)
          : (checked.value ? classes.value.toggleOn : classes.value.toggleOff)
      ],
      handle: [
        classes.value.handle,
        disabled.value
          ? (checked.value ? classes.value.handleOnDisabled : classes.value.handleOffDisabled)
          : (checked.value ? classes.value.handleOn : classes.value.handleOff)
      ],
      label: classes.value.label,
    }
  })

  return {
    classList,
  }
}