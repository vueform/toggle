<template>
  <div
    class="toggle-input"
    :class="{'is-active': isOn}"
    :style="cssVars"
    :id="id"
    @click="toggle"
  >
    <slot name="on">
      <span class="toggle-on" v-html="onLabel"></span>
    </slot>
    <slot name="off">
      <span class="toggle-off" v-html="offLabel"></span>
    </slot>
  </div>
</template>

<script>
  import useValue from './composables/useValue'
  import useStyle from './composables/useStyle'
  import useToggle from './composables/useToggle'

  /* istanbul ignore next */
  const valueProps = {
    value: {
      validator: function(p) {
        return p => ['number', 'string', 'boolean'].indexOf(typeof p) !== -1 || p === null || p === undefined
      },
      required: false,
    },
    modelValue: {
      validator: function(p) {
        return p => ['number', 'string', 'boolean'].indexOf(typeof p) !== -1 || p === null || p === undefined
      },
      required: false,
    },
  }

  export default {
    name: 'Toggle',
    emits: [
      'input', 'update:modelValue', 'change',
    ],
    props: {
      ...valueProps,
      id: {
        type: [String, Number],
        required: false,
        default: 'toggle'
      },
      falseValue: {
        type: [String, Number, Boolean],
        required: false,
        default: false,
      },
      trueValue: {
        type: [String, Number, Boolean],
        required: false,
        default: true,
      },
      width: {
        type: Number,
        required: false,
        default: 54
      },
      height: {
        type: Number,
        required: false,
        default: 24
      },
      speed: {
        type: Number,
        required: false,
        default: 300
      },
      offLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      onLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      offBackground: {
        type: String,
        required: false,
        default: '#f1f1f1'
      },
      onBackground: {
        type: String,
        required: false,
        default: '#41b883'
      },
      offColor: {
        type: String,
        required: false,
        default: '#888888'
      },
      onColor: {
        type: String,
        required: false,
        default: '#ffffff'
      },
      handleBackground: {
        type: String,
        required: false,
        default: '#ffffff'
      },
      fontSize: {
        type: String,
        required: false,
        default: '13px'
      },
    },
    setup(props, context)
    {
      // no export
      const value = useValue(props, context)

      const style = useStyle(props, context)

      const toggle = useToggle(props, context, {
        value: value.value,
        update: value.update,
      })

      return {
        ...style,
        ...toggle,
      }
    }
  }
</script>