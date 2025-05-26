import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  {ignores: ['dist']},
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
    },
    settings: {
      react: {version: '18.3'},
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
      'react/state-in-constructor': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/function-component-definition': 'off',
      'no-console': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          labelAttributes: ['htmlFor'],
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': [
        'off',
        {
          handlers: ['onClick'],
        },
      ],
      'react/prefer-stateless-function': [
        0,
        {
          ignorePureComponents: true,
        },
      ],
      'no-unused-vars': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'react/no-unused-state': 'warn',
      'react/button-has-type': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'operator-assignment': ['warn', 'always'],
      radix: 'off',
      'no-shadow': 'off',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },
]
