import { mount } from '@vue/test-utils'
import Toggle from './../../../src/Toggle'

export const createToggle = (props = {}, options = {}) => {
  let config = {}

  document.body.innerHTML = `
    <div>
      <div id="app"></div>
    </div>
  `

  if (options.attach) {
    config.attachTo = document.getElementById('app')
  }

  let wrapper = mount({
    data() {
      return {
        value: props.value,
        props: props
      }
    },
    template: `
      <div>
        <Toggle
          v-model="value"
          v-bind="props"
        />
      </div>
    `,
    components: {
      Toggle,
    }
  }, config)

  if (options.returnRoot) {
    return wrapper
  }

  return wrapper.findAllComponents({ name: 'Toggle' })[0]
}

export const destroy = (wrapper) => {
  wrapper.unmount()
} 

export const findAllComponents = (parent, query) => {
  let res = parent.findAllComponents(query)

  return {
    at: (i) => { return res[i] },
    length: res.length,
  }
}

export const findAll = (parent, query) => {
  let res = parent.findAll(query)

  return {
    at: (i) => { return res[i] },
    length: res.length,
  }
}

export const getValue = (toggle) => {
  return toggle.vm.modelValue
}

export const setProp = (wrapper, object, prop, value) => {
  object[prop] = value
}