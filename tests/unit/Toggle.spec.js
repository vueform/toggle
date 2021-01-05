import { createToggle, findAll } from 'unit-test-helpers'

describe('Toggle', () => {
  describe('id', () => {
    it('should add id attribute to input', async () => {
      const toggle = createToggle({
        value: 0,
        id: 'my-toggle'
      })

      const input = findAll(toggle, 'input').at(0)

      expect(input.attributes('id')).toBe('my-toggle')
    })

    it('should add id attribute as for for label', async () => {
      const toggle = createToggle({
        value: 0,
        id: 'my-toggle',
      })

      const label = findAll(toggle, 'label').at(0)

      expect(label.attributes('for')).toBe('my-toggle')
    })
  })

  describe('name', () => {
    it('should add name attribute to input', async () => {
      const toggle = createToggle({
        value: 0,
        name: 'my-toggle',
      })

      const input = findAll(toggle, 'input').at(0)

      expect(input.attributes('name')).toBe('my-toggle')
    })
  })
})