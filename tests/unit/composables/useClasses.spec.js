import { createToggle, getValue, findAll } from 'unit-test-helpers'
import { nextTick } from 'vue'

describe('useClasses', () => {
  describe('classList', () => {
    it('should return the right classes if enabled, off', async () => {
      const toggle = createToggle({
        value: false,
      })

      expect(toggle.vm.classList).toStrictEqual({
        container: 'toggle-container',
        toggle: ['toggle', 'toggle-off'],
        handle: ['toggle-handle', 'toggle-handle-off'],
        label: 'toggle-label',
      })
    })

    it('should return the right classes if enabled, on', async () => {
      const toggle = createToggle({
        value: true,
      })

      expect(toggle.vm.classList).toStrictEqual({
        container: 'toggle-container',
        toggle: ['toggle', 'toggle-on'],
        handle: ['toggle-handle', 'toggle-handle-on'],
        label: 'toggle-label',
      })
    })
    it('should return the right classes if disabled, off', async () => {
      const toggle = createToggle({
        value: false,
        disabled: true,
      })

      expect(toggle.vm.classList).toStrictEqual({
        container: 'toggle-container',
        toggle: ['toggle', 'toggle-off-disabled'],
        handle: ['toggle-handle', 'toggle-handle-off-disabled'],
        label: 'toggle-label',
      })
    })

    it('should return the right classes if disabled, on', async () => {
      const toggle = createToggle({
        value: true,
        disabled: true,
      })

      expect(toggle.vm.classList).toStrictEqual({
        container: 'toggle-container',
        toggle: ['toggle', 'toggle-on-disabled'],
        handle: ['toggle-handle', 'toggle-handle-on-disabled'],
        label: 'toggle-label',
      })
    })
  })
})