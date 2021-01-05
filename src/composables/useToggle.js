import { computed, toRefs } from 'composition-api'

export default function useValue (props, context, dependencies)
{
  const { trueValue, falseValue } = toRefs(props)
  
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const update = dependencies.update

  // ============== COMPUTED ==============

  const isOn = computed(() => {
    return value.value === trueValue.value
  })

  // =============== METHODS ==============

  const toggle = () => {
    update(isOn.value ? falseValue.value : trueValue.value)
  }

  const on = () => {
    update(trueValue.value)
  }

  const off = () => {
    update(falseValue.value)
  }

  return {
    isOn,
    toggle,
    on,
    off,
  }
}