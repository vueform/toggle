<div align="center">
  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/vueform/toggle">

  <a href="https://codecov.io/gh/vueform/toggle" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/vueform/toggle"/>
  </a>

  <a href="https://www.npmjs.com/package/@vueform/toggle" target="_blank">
    <img alt="npm bundle size (scoped version)" src="https://img.shields.io/bundlephobia/minzip/@vueform/toggle?color=53ca2f">
  </a>

  <a href="https://github.com/vueform/toggle/blob/main/LICENSE.md" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/github/license/vueform/toggle?color=53ca2f">
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

## Other libraries

* [@vueform/multiselect](https://github.com/vueform/multiselect) - Vue 3 multiselect component with single select, multiselect and tagging options.
* [@vueform/slider](https://github.com/vueform/slider) - Vue 3 slider component with multihandles, tooltips merging and formatting.

## Toggle features

* Vue 2 & 3 support
* No dependencies
* Lightweight (<2 kB gzipped)
* 100% coverage
* ESM support
* Fully configurable
* Dynamic styles
* On / Off labels

## Demo 

Check out our [demo](https://jsfiddle.net/quc03rf4/).

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

## Usage with Vue 2

When using with Vue 2 make sure to install [@vue/composition-api](https://github.com/vuejs/composition-api#npm) first and change the imported module to:

``` js
import Toggle from '@vueform/toggle/dist/toggle.vue2.js'
```

## Support

Join our [Discord channel](https://discord.gg/WhX2nG6GTQ) or [open an issue](https://github.com/vueform/toggle/issues).

## Basic props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **id** | `string` | `toggle` | The `id` attribute of input field. Make sure to customize when using more toggles on a single page. |
| **name** | `string` | `toggle` | The `name` attribute of input field. |
| **disabled** | `boolean` | `false` | Whether the toggle should be disabled. |
| **falseValue** | `string\|number\|boolean` | `false` | The value when the toggle is `off`. |
| **trueValue** | `string\|number\|boolean` | `true` | The value when toggle is `on`. |
| **offLabel** | `string` | | The label when toggle is `off`. |
| **onLabel** | `string` | | The label when toggle is `on`. |
| **width** | `number` | `54` | The width of the toggle in `px`. |
| **height** | `number` | `24` | The height of the toggle in `px`. |
| **speed** | `number` | `300` | The speed of toggle switch in `milliseconds`. |
| **colors** | `object` |  | The colors of toggle. Default:<br/>`{`<br/>&nbsp;&nbsp;`background: {`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`on: '#41b883',`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`off: '#d4e0e7',`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`disabled: '#d4e0e7'`<br/>&nbsp;&nbsp;`},`<br/>&nbsp;&nbsp;`text: {`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`on: '#ffffff',`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`off: '#80878c',`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`disabled: '#80878c'`<br/>&nbsp;&nbsp;`},`<br/>&nbsp;&nbsp;`handle: {`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`on: '#ffffff',`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`off: '#ffffff',`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`disabled: '#f2faff'`<br/>&nbsp;&nbsp;`}` |
| **fontSize** | `string` | `13px` | The font size of toggle labels. |

## Events

| Event | Attributes | Description |
| --- | --- | --- |
| **@change** | `value` | Emitted when the toggle changes. |

## Slots

| Slot |  Description |
| --- | --- |
| **off** | Rendered when the toggle is `off` (by default `offLabel`). |
| **on** | Rendered when the toggle is `on` (by default `onLabel`). |

## Examples

* [Default toggle](#default-toggle)
* [Toggle with labels](#toggle-with-labels)
* [Toggle with custom values](#toggle-with-custom-values)
* [Toggle with custom styles](#toggle-with-custom-styles)

### Default toggle

``` vue
<Toggle
  v-model="value"
/>
```

[JSFiddle - Example #1](https://jsfiddle.net/quc03rf4/)

### Toggle with labels

``` vue
<Toggle
  v-model="value"
  id="example2"
  on-label="On"
  off-label="Off"
/>
```

[JSFiddle - Example #2](https://jsfiddle.net/quc03rf4/)

### Toggle with custom values

``` vue
<Toggle
  v-model="value"
  id="example3"
  true-value="on"
  false-value="off"
/>
```

[JSFiddle - Example #3](https://jsfiddle.net/quc03rf4/)

### Toggle with custom styles

``` vue
<Toggle
  v-model="value"
  id="example4"
  font-size="15px"
  :width="80"
  :height="30"
  :speed="500"
  :colors="{
    background: {
      on: '#35495e'
    }
  }"
/>
```

[JSFiddle - Example #4](https://jsfiddle.net/quc03rf4/)

## About Vueform

[Vueform](https://vueform.com?ref=github) streamlines the entire form building process in Vue 2 & 3. It comes with 30+ elements, file uploads, element nesting, 50+ validators, conditions, form steps, i18n including reactive configuration, API access, ESM modules and many more. Check out our [live demos](https://vueform.com?ref=github#demo) or see [all the features](https://vueform.com?ref=github#features) and [sign up for beta](https://vueform.com?ref=github#beta) to get early access.


## License

[MIT](https://github.com/vueform/toggle/blob/main/LICENSE.md)