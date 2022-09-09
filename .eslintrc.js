module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 0,
    'linebreak-style': ["off", "windows"],
    'eol-last': ["off", "always"],
    'no-multiple-empty-lines': 0,
    'semi': 0
  },
};
