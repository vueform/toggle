import { createToggle } from 'unit-test-helpers'

describe('useStyle', () => {
  describe('cssVars', () => {
    it('should define CSS vars', async () => {
      const toggle = createToggle({
        value: false,
        width: 200,
        height: 50,
        speed: 500,
        colors: {
          background: {
            off: '#e8e8e8',
            on: 'blue',
            disabled: 'red',
          },
          text: {
            on: '#f1f1f1',
            off: '#111111',
            disabled: '#222222',
          },
          handle: {
            on: '#000000',
            disabled: '#121212',
          }
        },
        fontSize: '14px'
      })

      expect(toggle.vm.cssVars).toStrictEqual({
        '--toggle-off-background': '#e8e8e8',
        '--toggle-on-background': 'blue',
        '--toggle-disabled-background': 'red',
        '--toggle-off-text-color': '#111111',
        '--toggle-on-text-color': '#f1f1f1',
        '--toggle-disabled-text-color': '#222222',
        '--toggle-on-handle-color': '#000000',
        '--toggle-off-handle-color': '#ffffff',
        '--toggle-disabled-handle-color': '#121212',
        '--toggle-height': '50px',
        '--toggle-width': '200px',
        '--toggle-speed': '0.5s',
        '--toggle-radius': '25px',
        '--toggle-handle-size': '44px',
        '--toggle-handle-right-on': '47px',
        '--toggle-font-size': '14px',
      })
    })
  })
})