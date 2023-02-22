module.exports = {
  root: true,
  ignorePatterns: ['dist/**', 'pnpm-lock.yaml'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:yml/standard',
    'eslint:recommended',
    'standard',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
  },
}
