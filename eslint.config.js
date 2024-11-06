import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'], // Warn on unused variables
    'react/react-in-jsx-scope': 'off', // Disable the rule requiring React in scope,
    'quotes': ['error', 'single'], // Enforce single quotes
    'semi': ['error', 'always'], // Require semicolons
    'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas where valid in multiline
    // 'no-trailing-spaces': 'error', // Disallow trailing whitespace at the end of lines
    'eol-last': ['error', 'always'], // Require newline at the end of files
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'function' }, // Require a blank line before function declarations
      { blankLine: 'always', prev: 'function', next: '*' }, // Require a blank line after function declarations
      { blankLine: 'never', prev: ['block'], next: ['block'] }, // No extra line between blocks
      { blankLine: 'never', prev: ['class'], next: ['class'] }, // No extra line between classes
      // { blankLine: 'never', prev: ['var', 'let', 'const'], next: ['var', 'let', 'const'] }, // No extra line between variable declarations
      // { blankLine: 'never', prev: 'function', next: 'function' }, // No extra line between function declarations
    ],
    // Disallow console statements
    'no-console': 'error', // Disallow console statements
    'eqeqeq': ['error', 'always'], // Require strict equality,
    'curly': ['error', 'all'], // Enforce curly braces for all control statements
    'no-undef': 'error', // Disallow the use of undeclared variables
    'no-extra-boolean-cast': 'error', // Disallow unnecessary boolean casts
    'indent': ['error', 2], // 2 spaces for indentation,
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // One true brace style
    'prefer-const': 'error', // Prefer const for variables not reassigned
    'no-var': 'error', // Disallow var and use let/const
  } },
];
