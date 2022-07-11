import { ref, computed, toRefs } from 'vue'

export default function useStyle (props, context, dependencies)
{
  const { disabled } = toRefs(props)

  // ============ DEPENDENCIES ============

  const check = dependencies.check
  const uncheck = dependencies.uncheck
  const checked = dependencies.checked

  // =============== METHODS ==============

  const handleSpace = () => {
    if (disabled.value) {
      return
    }
    
    checked.value ? uncheck() : check()
  }

  return {
    handleSpace,
  }
}