import { computed, toRefs } from 'vue'

export default function useValue (props, context, dependencies)
{
  const { trueValue, falseValue, onLabel, offLabel } = toRefs(props)
  
  // ============ DEPENDENCIES ============

  const checked = dependencies.checked
  const update = dependencies.update

  // ============== COMPUTED ==============

  const label = computed(() => {
    let label = checked.value ? onLabel.value : offLabel.value

    if (!label) {
      label = '&nbsp;'
    }

    return label
  })

  // =============== METHODS ==============

  const toggle = () => {
    update(checked.value ? falseValue.value : trueValue.value)
  }

  const on = () => {
    update(trueValue.value)
  }

  const off = () => {
    update(falseValue.value)
  }

  return {
    label,
    toggle,
    on,
    off,
  }
}