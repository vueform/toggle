import { mount, createLocalVue } from '@vue/test-utils'
import Toggle from './../../../src/Toggle'

export const createToggle = (props = {}, options = {}) => {
  const localVue = createLocalVue()

  let config = {
    localVue,
  }

  if (options.attach) {
    config.attachTo = document.querySelector('body')
  }

  let wrapper = mount({
    data() {
      return {
        value: props.value,
        props: props,
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

  return wrapper.findAllComponents({ name: 'Toggle' }).at(0)
}

export const destroy = (wrapper) => {
  wrapper.destroy()
} 

export const findAllComponents = (parent, query) => {
  let res = parent.findAllComponents(query)

  return {
    at: (i) => { return res.at(i) },
    length: res.length,
  }
}

export const findAll = (parent, query) => {
  let res = parent.findAll(query)

  return {
    at: (i) => { return res.at(i) },
    length: res.length,
  }
}

export const getValue = (toggle) => {
  return toggle.vm.value
}

export const setProp = (wrapper, object, prop, value) => {
  wrapper.vm.$set(object, prop, value)
}

const keyEvent = (event, wrapper, key) => {
  switch (key) {
    case 'space':
      wrapper.trigger(event, { keyCode: 32 })
      break
  }
}

export const keyup = (wrapper, key) => {
  keyEvent('keyup', wrapper, key)
}

export const keypress = (wrapper, key) => {
  keyEvent('keypress', wrapper, key)
}