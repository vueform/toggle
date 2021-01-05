import { computed, toRefs } from 'composition-api'

export default function useValue (props, context, dependencies)
{
  const { trueValue, falseValue } = toRefs(props)
  
  // ============ DEPENDENCIES ============

  const inputValue = dependencies.inputValue
  const update = dependencies.update

  // ============== COMPUTED ==============

  const checked = computed(() => {
    return inputValue.value === trueValue.value
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
    checked,
    toggle,
    on,
    off,
  }
}