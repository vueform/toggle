<template>
  <div class="toggle-input" :style="cssVars">
    <input
      type="checkbox"
      :name="name"
      :id="id"
      :checked="checked"
      :trueValue="trueValue"
      :falseValue="falseValue"
      @input="handleInput"
    />
    <label :for="id">
      <slot name="on">
        <span class="toggle-on" v-html="onLabel"></span>
      </slot>
      <slot name="off">
        <span class="toggle-off" v-html="offLabel"></span>
      </slot>
    </label>
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
      name: {
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
      offTextColor: {
        type: String,
        required: false,
        default: '#888888'
      },
      onTextColor: {
        type: String,
        required: false,
        default: '#ffffff'
      },
      handleColor: {
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
      const value = useValue(props, context)

      const style = useStyle(props, context)

      const toggle = useToggle(props, context, {
        inputValue: value.inputValue,
        update: value.update,
      })

      return {
        ...value,
        ...style,
        ...toggle,
      }
    }
  }
</script>