import { createToggle, keyup } from 'unit-test-helpers'
import { nextTick } from 'composition-api'

describe('useKeyboard', () => {
  describe('handleSpace', () => {
    it('should check if not checked on space', async () => {
      const toggle = createToggle({
        value: false,
      })

      keyup(toggle, 'space')

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
    })

    it('should uncheck if checked on space', async () => {
      const toggle = createToggle({
        value: true,
      })

      keyup(toggle, 'space')

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })
  })
})