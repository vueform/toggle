import { ref, computed, toRefs } from 'composition-api'

export default function useClasses (props, context, dependencies)
{
  const refs = toRefs(props)
  const disabled = refs.disabled.value
  const classes = {
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
  }

  // ============ DEPENDENCIES ============

  const checked = dependencies.checked

  // ============== COMPUTED ==============

  const classList = computed(() => {
    return {
      container: classes.container,
      toggle: [
        classes.toggle,
        disabled
          ? (checked.value ? classes.toggleOnDisabled : classes.toggleOffDisabled)
          : (checked.value ? classes.toggleOn : classes.toggleOff)
      ],
      handle: [
        classes.handle,
        disabled
          ? (checked.value ? classes.handleOnDisabled : classes.handleOffDisabled)
          : (checked.value ? classes.handleOn : classes.handleOff)
      ],
      label: classes.label,
    }
  })

  return {
    classList,
  }
}