import vue from 'vue-next-rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
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
      alias({
        entries: [
          { find: 'composition-api', replacement: 'vue' },
        ]
      }),
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
        'composition-api': 'Vue',
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