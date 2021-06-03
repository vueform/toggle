import { createToggle } from 'unit-test-helpers'
import { nextTick } from 'composition-api'

describe('useToggle', () => {
  describe('checked', () => {
    it('should be true if input value equals trueValue', async () => {
      const toggle = createToggle({
        value: 'on',
        trueValue: 'on',
        falseValue: 'off',
      })
      
      expect(toggle.vm.checked).toBe(true)

      toggle.vm.update('off')

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })
  })

  describe('label', () => {
    it('should be equal to onLabel if checked', async () => {
      const toggle = createToggle({
        value: true,
        onLabel: 'on',
        offLabel: 'off',
      })
      
      expect(toggle.vm.label).toBe('on')
    })

    it('should be equal to offLabel if not checked', async () => {
      const toggle = createToggle({
        value: false,
        onLabel: 'on',
        offLabel: 'off',
      })
      
      expect(toggle.vm.label).toBe('off')
    })

    it('should be equal to &nbsp; if labels are not provided and off', async () => {
      const toggle = createToggle({
        value: false,
      })
      
      expect(toggle.vm.label).toBe('&nbsp;')
    })

    it('should be equal to &nbsp; if labels are not provided and on', async () => {
      const toggle = createToggle({
        value: false,
      })
      
      expect(toggle.vm.label).toBe('&nbsp;')
    })
  })

  describe('toggle', () => {
    it('should toggle value', async () => {
      const toggle = createToggle({
        value: 'on',
        trueValue: 'on',
        falseValue: 'off',
      })

      toggle.vm.toggle()

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
      expect(toggle.vm.externalValue).toBe('off')
      expect(toggle.vm.$parent.value).toBe('off')

      toggle.vm.toggle()

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
      expect(toggle.vm.externalValue).toBe('on')
      expect(toggle.vm.$parent.value).toBe('on')
    })
  })

  describe('on', () => {
    it('should toggle on', async () => {
      const toggle = createToggle({
        value: 'off',
        trueValue: 'on',
        falseValue: 'off',
      })

      toggle.vm.on()

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
      expect(toggle.vm.externalValue).toBe('on')
      expect(toggle.vm.$parent.value).toBe('on')
    })
  })

  describe('off', () => {
    it('should toggle off', async () => {
      const toggle = createToggle({
        value: 'on',
        trueValue: 'on',
        falseValue: 'off',
      })

      toggle.vm.off()

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
      expect(toggle.vm.externalValue).toBe('off')
      expect(toggle.vm.$parent.value).toBe('off')
    })
  })
})