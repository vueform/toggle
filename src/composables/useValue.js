import { toRefs } from 'composition-api'

export default function useValue (props, context, dependencies)
{
  const { value: baseValue, modelValue, falseValue } = toRefs(props)

  /* istanbul ignore next */
  const value = context.expose !== undefined ? modelValue : baseValue

  // =============== METHODS ==============

  // no export
  const update = (val) => {
    context.emit('input', val)
    context.emit('update:modelValue', val)
    context.emit('change', val)
  }

  // ================ HOOKS ===============

  if ([null, undefined].indexOf(value.value) !== -1) {
    update(falseValue.value)
  }

  return {
    value,
  }
}