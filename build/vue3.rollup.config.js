import vue from 'vue-next-rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/Toggle.vue',
    output: {
      file: 'dist/toggle.js',
      format: 'esm',
    },
    plugins: [
      vue(),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
      }),
      terser(),
    ],
    external: 'vue',
  },
  {
    input: 'src/Toggle.vue',
    output: {
      file: 'dist/toggle.global.js',
      format: 'iife',
      name: 'VueformToggle',
      globals: {
        'vue': 'Vue',
      }
    },
    plugins: [
      vue(),
      babel({
        babelHelpers: 'bundled',
      }),
      terser()
    ],
    external: ['vue'],
  }
]