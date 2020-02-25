module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/mustache-interpolation-spacing': 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
