import { ref, computed, toRefs } from 'composition-api'

export default function useStyle (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const check = dependencies.check
  const uncheck = dependencies.uncheck
  const checked = dependencies.checked

  // =============== METHODS ==============

  const handleSpace = () => {
    checked.value ? uncheck() : check()
  }

  return {
    handleSpace,
  }
}