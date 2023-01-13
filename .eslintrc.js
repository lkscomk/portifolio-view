module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/eqeqeq': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/no-confusing-v-for-v-if': 'warn',
    'vue/order-in-components': 'error',
    'vue/no-template-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/this-in-template': 'error',
    'vue/attributes-order': 'error'
  }
}
