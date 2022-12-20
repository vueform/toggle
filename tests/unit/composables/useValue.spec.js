import { createToggle, getValue, findAll } from 'unit-test-helpers'
import { nextTick } from 'vue'

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

      expect(toggle.vm.externalValue).toBe(true)
      expect(toggle.vm.$parent.value).toBe(true)

      toggle.vm.handleInput({
        target: {
          checked: false
        }
      })

      await nextTick()

      expect(toggle.vm.externalValue).toBe(false)
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

      expect(toggle.vm.externalValue).toBe('on')
      expect(toggle.vm.$parent.value).toBe('on')

      toggle.vm.handleInput({
        target: {
          checked: false
        }
      })

      await nextTick()

      expect(toggle.vm.externalValue).toBe('off')
      expect(toggle.vm.$parent.value).toBe('off')
    })
  })

  describe('handleClick', () => {
    it('should check if not checked on click', async () => {
      const toggle = createToggle({
        value: false,
      })

      findAll(toggle, 'input + div').at(0).trigger('click')

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
    })

    it('should uncheck if checked on click', async () => {
      const toggle = createToggle({
        value: true,
      })

      findAll(toggle, 'input + div').at(0).trigger('click')

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })

    it('should not uncheck if checked on click if disabled', async () => {
      const toggle = createToggle({
        value: true,
        disabled: true,
      })

      findAll(toggle, 'input + div').at(0).trigger('click')

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
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

    it('should not set value to falseValue if v-model is false && true value is false', async () => {
      const toggle = createToggle({
        value: false,
        trueValue: false,
        falseValue: true,
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
    })

    it('should not set value to falseValue if v-model is 0 && true value is 0', async () => {
      const toggle = createToggle({
        value: 0,
        trueValue: 0,
        falseValue: 1,
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
    })

    it('should not set value to falseValue if v-model is \'0\' && true value is \'0\'', async () => {
      const toggle = createToggle({
        value: '0',
        trueValue: '0',
        falseValue: '1',
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
    })

    it('should not set value to falseValue if v-model is \'off\' && true value is \'off\'', async () => {
      const toggle = createToggle({
        value: 'off',
        trueValue: 'off',
        falseValue: 'on',
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(true)
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

    it('should not set value to trueValue if v-model is true && false value is true', async () => {
      const toggle = createToggle({
        value: true,
        trueValue: false,
        falseValue: true,
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })

    it('should not set value to trueValue if v-model is 1 && false value is 1', async () => {
      const toggle = createToggle({
        value: 1,
        trueValue: 0,
        falseValue: 1,
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })

    it('should not set value to trueValue if v-model is \'1\' && false value is \'1\'', async () => {
      const toggle = createToggle({
        value: '1',
        trueValue: '0',
        falseValue: '1',
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })

    it('should not set value to trueValue if v-model is \'on\' && false value is \'on\'', async () => {
      const toggle = createToggle({
        value: 'on',
        trueValue: 'off',
        falseValue: 'on',
      })

      await nextTick()

      expect(toggle.vm.checked).toBe(false)
    })

    it('should trigger change event if value is falsy and falseValue is different than value', async () => {
      const toggle = createToggle({
        value: false,
        falseValue: 'off',
      })

      await nextTick()

      expect(toggle.emitted().change[0]).toEqual(['off'])
    })

    it('should trigger change event if value is truthy and trueValue is different than value', async () => {
      const toggle = createToggle({
        value: true,
        falseValue: 'off',
        trueValue: 'on',
      })

      await nextTick()

      expect(toggle.emitted().change[0]).toEqual(['on'])
    })

    it('should not trigger change event if value is falsy and falseValue is same than value', async () => {
      const toggle = createToggle({
        value: 'off',
        falseValue: 'off',
        trueValue: 'on',
      })

      await nextTick()

      expect(toggle.emitted().change).toBeFalsy()
    })

    it('should not trigger change event if value is falsy and trueValue is same than value', async () => {
      const toggle = createToggle({
        value: 'on',
        falseValue: 'off',
        trueValue: 'on',
      })

      await nextTick()

      expect(toggle.emitted().change).toBeFalsy()
    })
  })
})