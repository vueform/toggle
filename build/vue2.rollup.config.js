import vue from 'vue-prev-rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/Toggle.vue',
    output: {
      file: 'dist/toggle.vue2.js',
      format: 'esm',
    },
    plugins: [
      vue(),
      alias({
        entries: [
          { find: 'composition-api', replacement: '@vue/composition-api' },
        ]
      }),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
      }),
      terser(),
    ],
    external: ['@vue/composition-api'],
  },
  {
    input: 'src/Toggle.vue',
    output: {
      file: 'dist/toggle.vue2.global.js',
      format: 'iife',
      name: 'VueformToggle',
      globals: {
        'composition-api': 'VueCompositionAPI',
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
    external: ['composition-api', 'vue'],
  }
]