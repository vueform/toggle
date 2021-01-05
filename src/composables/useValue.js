import { toRefs, watch } from 'composition-api'

export default function useValue (props, context, dependencies)
{
  const { value: baseValue, modelValue, falseValue, trueValue } = toRefs(props)

  /* istanbul ignore next */
  const inputValue = context.expose !== undefined ? modelValue : baseValue

  // =============== METHODS ==============

  // no export
  const update = (val) => {
    context.emit('input', val)
    context.emit('update:modelValue', val)
    context.emit('change', val)
  }

  const handleInput = (val) => {
    update(val.target.checked ? trueValue.value : falseValue.value)
  }

  // ================ HOOKS ===============

  if ([null, undefined, false, 0, '0', 'off'].indexOf(inputValue.value) !== -1) {
    update(falseValue.value)
  }

  if ([true, 1, '1', 'on'].indexOf(inputValue.value) !== -1) {
    update(trueValue.value)
  }

  return {
    inputValue,
    update,
    handleInput,
  }
}