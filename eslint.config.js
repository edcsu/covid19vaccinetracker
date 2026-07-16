import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['dist/**', 'out/**', 'dist_electron/**', 'build/**', 'dev-dist/**']
  },
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
