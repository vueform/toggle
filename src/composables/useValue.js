import { toRefs, computed } from 'vue'

export default function useValue (props, context, dependencies)
{
  const { value, modelValue, falseValue, trueValue, disabled } = toRefs(props)

  /* istanbul ignore next */
  const externalValue = modelValue && modelValue.value !== undefined ? modelValue : value

  // ============== COMPUTED ==============

  const checked = computed(() => {
    return externalValue.value === trueValue.value
  })

  // =============== METHODS ==============

  // no export
  const update = (val) => {
    context.emit('input', val)
    context.emit('update:modelValue', val)
    context.emit('change', val)
  }

  const check = () => {
    update(trueValue.value)
  }

  const uncheck = () => {
    update(falseValue.value)
  }

  const handleInput = (val) => {
    update(val.target.checked ? trueValue.value : falseValue.value)
  }

  const handleClick = () => {
    if (disabled.value) {
      return
    }

    checked.value ? uncheck() : check()
  }

  // ================ HOOKS ===============

  if ([null, undefined, false, 0, '0', 'off'].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    uncheck()
  }

  if ([true, 1, '1', 'on'].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    check()
  }

  return {
    externalValue,
    checked,
    update,
    check,
    uncheck,
    handleInput,
    handleClick,
  }
}