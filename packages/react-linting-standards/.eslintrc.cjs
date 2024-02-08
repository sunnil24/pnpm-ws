const base = require('./config/base.cjs');
const react = require('./config/react.cjs');
const prettier = require('./config/prettier.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json'
  },
  plugins: ['tailwindcss',"testing-library",'sort-destructure-keys','import'],
  rules: {
    ...base,
    ...react,
    ...prettier
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '~': './src',
          '@': './src',
          '#': './src',
          src: './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};