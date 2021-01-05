import { createToggle, getValue } from 'unit-test-helpers'
import { nextTick } from 'composition-api'

describe('useValue', () => {
  describe('handleInput', () => {
    it('should update value', async () => {
      const toggle = createToggle({
        value: false,
      })

      toggle.vm.handleInput({
        target: {
          checked: true
        }
      })

      await nextTick()

      expect(toggle.vm.inputValue).toBe(true)
      expect(toggle.vm.$parent.value).toBe(true)

      toggle.vm.handleInput({
        target: {
          checked: false
        }
      })

      await nextTick()

      expect(toggle.vm.inputValue).toBe(false)
      expect(toggle.vm.$parent.value).toBe(false)
    })

    it('should update value with custom true/false value', async () => {
      const toggle = createToggle({
        value: 'off',
        falseValue: 'off',
        trueValue: 'on',
      })

      toggle.vm.handleInput({
        target: {
          checked: true
        }
      })

      await nextTick()

      expect(toggle.vm.inputValue).toBe('on')
      expect(toggle.vm.$parent.value).toBe('on')

      toggle.vm.handleInput({
        target: {
          checked: false
        }
      })

      await nextTick()

      expect(toggle.vm.inputValue).toBe('off')
      expect(toggle.vm.$parent.value).toBe('off')
    })
  })

  describe('onCreated', () => {
    it('should set value to falseValue if v-model is null', async () => {
      const toggle = createToggle({
        value: null,
        falseValue: 'off'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('off')
    })

    it('should set value to falseValue if v-model is undefined', async () => {
      const toggle = createToggle({
        value: undefined,
        falseValue: 'off'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('off')
    })

    it('should set value to falseValue if v-model is false', async () => {
      const toggle = createToggle({
        value: false,
        falseValue: 'off'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('off')
    })

    it('should set value to falseValue if v-model is 0', async () => {
      const toggle = createToggle({
        value: 0,
        falseValue: 'off'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('off')
    })

    it('should set value to falseValue if v-model is \'0\'', async () => {
      const toggle = createToggle({
        value: '0',
        falseValue: 'off'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('off')
    })

    it('should set value to falseValue if v-model is \'off\'', async () => {
      const toggle = createToggle({
        value: 'off',
        falseValue: false
      })

      await nextTick()

      expect(getValue(toggle)).toBe(false)
    })

    it('should set value to trueValue if v-model is true', async () => {
      const toggle = createToggle({
        value: true,
        trueValue: 'on'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('on')
    })

    it('should set value to trueValue if v-model is 1', async () => {
      const toggle = createToggle({
        value: 1,
        trueValue: 'on'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('on')
    })

    it('should set value to trueValue if v-model is \'1\'', async () => {
      const toggle = createToggle({
        value: '1',
        trueValue: 'on'
      })

      await nextTick()

      expect(getValue(toggle)).toBe('on')
    })

    it('should set value to trueValue if v-model is \'on\'', async () => {
      const toggle = createToggle({
        value: 'on',
        trueValue: 1
      })

      await nextTick()

      expect(getValue(toggle)).toBe(1)
    })
  })
})