import { createToggle } from 'unit-test-helpers'

describe('useStyle', () => {
  describe('cssVars', () => {
    it('should define CSS vars', async () => {
      const toggle = createToggle({
        value: false,
        width: 200,
        height: 50,
        speed: 500,
        offBackground: '#e8e8e8',
        onBackground: 'blue',
        offTextColor: '#111111',
        onTextColor: '#f1f1f1',
        handleColor: '#000000',
        fontSize: '14px'
      })

      expect(toggle.vm.cssVars).toStrictEqual({
        '--toggle-off-background': '#e8e8e8',
        '--toggle-on-background': 'blue',
        '--toggle-off-text-color': '#111111',
        '--toggle-on-text-color': '#f1f1f1',
        '--toggle-handle-color': '#000000',
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