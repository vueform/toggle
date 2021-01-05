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
  import { ref, computed, toRefs } from 'composition-api'

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
      const { value: baseValue, modelValue, trueValue, falseValue, width, height, speed,
              offLabel, onLabel, offBackground, onBackground, offColor, onColor, fontSize,
              handleBackground, } = toRefs(props)

      /* istanbul ignore next */
      const value = context.expose !== undefined ? modelValue : baseValue

      // ============== COMPUTED ==============

      const isOn = computed(() => {
        return value.value === trueValue.value
      })

      const cssVars = computed(() => {
        let cssVars = {
          '--toggle-off-background': offBackground.value,
          '--toggle-on-background': onBackground.value,
          '--toggle-off-color': offColor.value,
          '--toggle-on-color': onColor.value,
          '--toggle-handle-background': handleBackground.value,
          '--toggle-height': height.value + 'px',
          '--toggle-width': width.value + 'px',
          '--toggle-speed': (speed.value / 1000) + 's',
          '--toggle-radius': (height.value / 2) + 'px',
          '--toggle-handle-size': (height.value - 6) + 'px',
          '--toggle-handle-right-on': (height.value - 3) + 'px',
          '--toggle-font-size': fontSize.value,
        }

        return cssVars
      })

      // =============== METHODS ==============

      const toggle = () => {
        update(isOn.value ? falseValue.value : trueValue.value)
      }

      const on = () => {
        update(trueValue.value)
      }

      const off = () => {
        update(falseValue.value)
      }

      // no export
      const update = (val) => {
        context.emit('input', val)
        context.emit('update:modelValue', val)
        context.emit('change', val)
      }

      // ================ HOOKS ===============

      if ([null, undefined].indexOf(value.value) !== -1) {
        update(falseValue.value)
      }

      const textColor = ref('red')

      return {
        toggle,
        isOn,
        cssVars,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toggle-input {
    background: #f1f1f1;
    background: var(--toggle-off-background);
    width: 54px;
    width: var(--toggle-width);
    height: 24px;
    height: var(--toggle-height);
    display: flex;
    border-radius: 12px;
    border-radius: var(--toggle-radius);
    position: relative;
    cursor: pointer;
    transition: .3s background;
    transition: var(--toggle-speed) background;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 24px;
    padding-left: var(--toggle-height);
    padding-right: 6px;

    &:before {
      content: " ";
      background: #ffffff;
      background: var(--toggle-handle-background);
      width: 18px;
      width: var(--toggle-handle-size);
      height: 18px;
      height: var(--toggle-handle-size);
      border-radius: 50%;
      position: absolute;
      left: 3px;
      top: 3px;
      transition: .3s left;
      transition: var(--toggle-speed) left;
    }

    &.is-active {
      background: #41b883;
      background: var(--toggle-on-background);
      padding-right: 24px;
      padding-right: var(--toggle-height);
      padding-left: 6px;

      &:before {
        left: calc(100% - var(--toggle-handle-right-on));
      }

      .toggle-on {
        display: flex;
      }

      .toggle-off {
        display: none;
      }
    }

    .toggle-on,
    .toggle-off {
      font-size: 13px;
      font-size: var(--toggle-font-size);
      text-align: center;
      font-weight: 500;
    }

    .toggle-on {
      display: none;
      color: #ffffff;
      color: var(--toggle-on-color);
    }

    .toggle-off {
      display: flex;
      color: #888888;
      color: var(--toggle-off-color);
    }
  }
</style>