import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  // Config para arquivos JS do frontend (browser)
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['postcss.config.js'], // excluímos aqui e lidamos abaixo
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Config específica para arquivos Node.js
  {
    files: ['postcss.config.js', '**/*.config.js'], // pode expandir para outros configs
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node, // Aqui está a solução!
      parserOptions: {
        sourceType: 'module',
      },
    },
    rules: {
      // Regras adicionais ou ajustes específicos se quiser
    },
  },
])
