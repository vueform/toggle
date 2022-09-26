<template>
  <div
    :class="classList.container"
    :tabindex="disabled ? undefined : 0"
    :aria-checked="checked"
    :aria-describedby="describedby"
    :aria-labelledby="labelledby"
    role="switch"
    v-bind="aria"
    @keypress.space.prevent="handleSpace"
  >
    <input
      v-show="false"
      type="checkbox"
      :id="id"
      :name="name"
      :value="trueValue"
      :checked="checked"
      :disabled="disabled"
    />
    <div
      :class="classList.toggle"
      @click="handleClick"
    >
      <span :class="classList.handle"></span>
      <slot name="label" :checked="checked" :classList="classList">
        <span
          :class="classList.label"
          v-html="label"
        ></span>
      </slot>
      <input v-if="required" type="checkbox" :style="{
        appearance: 'none',
        height: '1px',
        margin: '0',
        padding: '0',
        fontSize: '0',
        background: 'transparent',
        position: 'absolute',
        width: '100%',
        bottom: '0',
        outline: 'none',
      }" :checked="checked" aria-hidden="true" tabindex="-1" required>
    </div>
  </div>
</template>

<script>
  import useValue from './composables/useValue'
  import useToggle from './composables/useToggle'
  import useClasses from './composables/useClasses'
  import useKeyboard from './composables/useKeyboard'

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
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
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
      onLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      offLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      labelledby: {
        type: String,
        required: false,
      },
      describedby: {
        type: String,
        required: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, context)
    {
      const value = useValue(props, context)

      const toggle = useToggle(props, context, {
        checked: value.checked,
        update: value.update,
      })

      const classes = useClasses(props, context, {
        checked: value.checked,
      })

      const keyboard = useKeyboard(props, context, {
        check: value.check,
        uncheck: value.uncheck,
        checked: value.checked,
      })

      return {
        ...value,
        ...classes,
        ...toggle,
        ...keyboard,
      }
    }
  }
</script>