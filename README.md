<div align="center">

  <a href="https://www.npmjs.com/package/@vueform/toggle" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dm/@vueform/toggle?color=%2353ca2f">
  </a>

  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/vueform/toggle">

  <a href="https://codecov.io/gh/vueform/toggle" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/vueform/toggle"/>
  </a>

  <a href="https://www.npmjs.com/package/@vueform/toggle" target="_blank">
    <img alt="npm bundle size (scoped version)" src="https://img.shields.io/bundlephobia/minzip/@vueform/toggle?color=53ca2f">
  </a>

  <a href="https://discord.gg/WhX2nG6GTQ" target="_blank">
    <img alt="Discord" src="https://img.shields.io/discord/787237947635793940">
  </a>

  <a href="https://www.npmjs.com/package/@vueform/toggle" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/@vueform/toggle">
  </a>

  <h1>Vue 3 Toggle</h1>
  
  <a href="https://vueform.com?ref=github" target="_blank">
    <br>
    <img align="center" src="https://github.com/vueform/toggle/raw/main/assets/logo.svg" width="110">
    <br>
  </a>

  <br>
  <br>

  <a href="https://www.npmjs.com/package/@vueform/toggle" target="_blank">
    <img align="center" src="https://github.com/vueform/toggle/raw/main/assets/screenshot-1.png">
  </a>
  <br>

</div>

## Sponsors

<div align="center"><br>
  <a href="https://vueform.com?ref=github"><img src="https://github.com/vueform/toggle/raw/main/assets/logo-horizontal.svg" width="200"></a>
</div>

## About Vueform

<a href="https://vueform.com?ref=toggle">
  <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/vueform-banner.png" alt="Vueform" title="Vueform">
</a>

<br>
<br>

Vueform is comprehensive **form development framework** for Vue.js. It supercharges and standardizes the entire form building process and takes care of everything from rendering to validation and processing. With our latest tool, the **Drag and Drop Form Builder**, you can allow your developers & non-tech workforce to build the most complex forms without coding.

Feature highlights:
- integrate Vueform **Drag and Drop Form Builder** into **any application**
- save forms in **database** as a JSON
- use your **own form elements** with **custom configuration** options
- a complete theming and templating system with **Tailwind support**
- 25+ form elements with **multi-file uploads**, date pickers and rich text editor
- element **nesting** and **repeating**
- **50+ validators** with async, dependent and custom rules
- **conditional logic** on element & form level
- breaking forms into **steps** with **form wizard**
- **translating** form content and global i18n support.

<a href="https://builder.vueform.com/demo?ref=toggle">
  <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/builder-banner.png" alt="Vueform Builder" title="Vueform Builder">
</a>
<br>
<br>

**Learn more:**
- Builder: [https://builder.vueform.com](https://builder.vueform.com?ref=toggle)
- Framework: [https://vueform.com](https://vueform.com?ref=toggle)

## Other libraries

* [@vueform/multiselect](https://github.com/vueform/multiselect) - Vue 3 multiselect component with single select, multiselect and tagging options.
* [@vueform/slider](https://github.com/vueform/slider) - Vue 3 slider component with multihandles, tooltips merging and formatting.

## Toggle features

* Vue 2 & 3 support
* No dependencies
* Lightweight (<2 kB gzipped)
* 100% coverage
* TypeScript support
* Accessibility support
* ESM support
* CSS vars support
* Tailwind & utility class support
* On / Off labels

## Demo 

Check out our [demo](https://jsfiddle.net/m2hvw7o8/).

## Installation

```
npm install @vueform/toggle
```

## Usage with Vue 3

``` vue
<template>
  <div>
    <Toggle v-model="value" />
  </div>
</template>

<script>
  import Toggle from '@vueform/toggle'

  export default {
    components: {
      Toggle,
    },
    data() {
      return {
        value: true
      }
    }
  }
</script>

<style src="@vueform/toggle/themes/default.css"></style>
```

## Using with Vue 2

``` vue
<template>
  <div>
    <Toggle v-model="value" />
  </div>
</template>

<script>
  import Toggle from '@vueform/toggle/toggle.vue2.js'

  export default {
    components: {
      Toggle,
    },
    data() {
      return {
        value: true
      }
    }
  }
</script>

<style src="@vueform/toggle/themes/default.css"></style>
```

#### Using with < Vue 2.7

Switch to [`<= 2.0.2`](https://github.com/vueform/toggle/tree/2.0.2) to use the Toggle with Vue.js `< 2.7`.

## Support

Join our [Discord channel](https://discord.gg/WhX2nG6GTQ) or [open an issue](https://github.com/vueform/toggle/issues).

## Basic props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **id** | `string` | `toggle` | The `id` attribute of input field. Make sure to customize when using more toggles on a single page. |
| **name** | `string` | `toggle` | The `name` attribute of input field. |
| **disabled** | `boolean` | `false` | Whether the toggle should be disabled. |
| **required** | `boolean` | `false` | Whether the HTML5 required attribute should be used for toggle (using an invisible fake input). |
| **falseValue** | `string\|number\|boolean` | `false` | The value when the toggle is `off`. |
| **trueValue** | `string\|number\|boolean` | `true` | The value when toggle is `on`. |
| **offLabel** | `string` | | The label when toggle is `off`. |
| **onLabel** | `string` | | The label when toggle is `on`. |
| **aria** | `object` | | An object containing aria attributes to be added for the toggle. |
| **labelledby** | `string` | | The `aria-labelledby` attribute. |
| **describedby** | `string` | | The `aria-describedby` attribute. |
| **classes** | `object` | | An object of class names that gets merged with the default values. Default: `{`<br>&nbsp;&nbsp;`container: 'toggle-container',`<br>&nbsp;&nbsp;`toggle: 'toggle',`<br>&nbsp;&nbsp;`toggleOn: 'toggle-on',`<br>&nbsp;&nbsp;`toggleOff: 'toggle-off',`<br>&nbsp;&nbsp;`toggleOnDisabled: 'toggle-on-disabled',`<br>&nbsp;&nbsp;`toggleOffDisabled: 'toggle-off-disabled',`<br>&nbsp;&nbsp;`handle: 'toggle-handle',`<br>&nbsp;&nbsp;`handleOn: 'toggle-handle-on',`<br>&nbsp;&nbsp;`handleOff: 'toggle-handle-off',`<br>&nbsp;&nbsp;`handleOnDisabled: 'toggle-handle-on-disabled',`<br>&nbsp;&nbsp;`handleOffDisabled: 'toggle-handle-off-disabled',`<br>&nbsp;&nbsp;`label: 'toggle-label',`<br>`}`.<br> The default value can be used with `default.css` and style can be customized with [CSS variables](#styling-with-css-vars). Alternatively this can be overridden with utility classes like [Tailwind CSS](#styling-with-tailwind-css). |

<a href="https://vueform.com?ref=ghb">
  <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/vueform-banner.png" alt="Vueform" title="Vueform">
</a>

## Events

| Event | Attributes | Description |
| --- | --- | --- |
| **@change** | `value` | Emitted when the toggle changes. |

## Slots

| Slot | Attributes | Description |
| --- | --- | --- |
| **label** | `checked`, `classList` | The label of the toggle element. The `checked` attribute determines whether the toggle is *on* or *off* so you can display the label accordingly. The `classList` contains the resolved class names. |

## Styling with CSS vars

The following CSS variables can be used to customize toggle when using `default.css`:
``` css

--toggle-width: 3rem;
--toggle-height: 1.25rem;
--toggle-border: 0.125rem;
--toggle-font-size: 0.75rem;
--toggle-duration: 150ms;
--toggle-bg-on: #10b981;
--toggle-bg-off: #e5e7eb;
--toggle-bg-on-disabled: #d1d5db;
--toggle-bg-off-disabled: #e5e7eb;
--toggle-border-on: #10b981;
--toggle-border-off: #e5e7eb;
--toggle-border-on-disabled: #d1d5db;
--toggle-border-off-disabled: #e5e7eb;
--toggle-ring-width: 3px;
--toggle-ring-color: #10B98130;
--toggle-text-on: #ffffff;
--toggle-text-off: #374151;
--toggle-text-on-disabled: #9ca3af;
--toggle-text-off-disabled: #9ca3af;
--toggle-handle-enabled: #ffffff;
--toggle-handle-disabled: #f3f4f6;
```

Override them globally:

``` css
:root {
  --toggle-bg-on: red;
  --toggle-border-on: red;
}
```

Or on an instance level:

``` vue
<Toggle v-model="value" class="toggle-red" />
<Toggle v-model="value" class="toggle-blue" />
```

``` css
.toggle-red {
  --toggle-bg-on: red;
  --toggle-border-on: red;
}

.toggle-blue {
  --toggle-bg-on: blue;
  --toggle-border-on: blue;
}
```

## Styling with Tailwind CSS

The `Toggle` component accepts a `classes` property which allows to override default class names. When using utility classes you don't need to import `default.css`. Here's a default styling for Tailwind CSS:

``` vue
<Toggle v-model="value" :classes="{
  container: 'inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30',
  toggle: 'flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
  toggleOn: 'bg-green-500 border-green-500 justify-start text-white',
  toggleOff: 'bg-gray-200 border-gray-200 justify-end text-gray-700',
  toggleOnDisabled: 'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
  toggleOffDisabled: 'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
  handle: 'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
  handleOn: 'left-full transform -translate-x-full',
  handleOff: 'left-0',
  handleOnDisabled: 'bg-gray-100 left-full transform -translate-x-full',
  handleOffDisabled: 'bg-gray-100 left-0',
  label: 'text-center w-8 border-box whitespace-nowrap select-none',
}" />
```

Certain classes has different states which are merged to the base class when the state is active. For example `handle` will be merged with `handleOn` when the toggle is **on** and **not disabled** resulting in the following classes:
```inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all left-full transform -translate-x-full```

The same is true for `toggle`.

In case you need to override the same type of utility you might use [@neojp/tailwind-important-variant](https://www.npmjs.com/package/@neojp/tailwindcss-important-variant) and use eg. `bg-green-500!`.

## Accessibility

By default the `on` and `off` labels are being read by the screenreaders. If you provide the `labelledby` property that will be read instead of the labels. You might also add a `describedby` property to provide further description.

``` vue
<div>
  <label id="toggle-label">Turn on notifications</label>
  <Toggle v-model="value" labelledby="toggle-label" describedby="toggle-description" />
</div>
<small id="toggle-description">Turn this on if you'd like to receive in-app notifications.</small>
```

## Examples

* [Default toggle](#default-toggle)
* [Toggle with labels](#toggle-with-labels)
* [Toggle with custom values](#toggle-with-custom-values)
* [Toggle with custom labels](#toggle-with-custom-labels)

### Default toggle

``` vue
<Toggle
  v-model="value"
/>
```

[JSFiddle - Example #1](https://jsfiddle.net/m2hvw7o8/)

### Toggle with labels

``` vue
<Toggle
  v-model="value"
  on-label="On"
  off-label="Off"
/>
```

[JSFiddle - Example #2](https://jsfiddle.net/m2hvw7o8/)

### Toggle with custom value

``` vue
<Toggle
  v-model="value"
  true-value="on"
  false-value="off"
/>
```

[JSFiddle - Example #3](https://jsfiddle.net/m2hvw7o8/)

### Toggle with custom labels

``` vue
<Toggle
  v-model="value"
>
  <template v-slot:label="{ checked, classList }">
    <span :class="classList.label">{{ checked ? 'On' : 'Off' }}</span>
  </template>
</Toggle>
```

[JSFiddle - Example #4](https://jsfiddle.net/m2hvw7o8/)

## License

[MIT](https://github.com/vueform/toggle/blob/main/LICENSE.md)