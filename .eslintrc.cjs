module.exports = {
  // ...
  extends: ['standard', 'plugin:astro/recommended'],
  rules: {
    'no-tabs': 'off',
    'no-unused-vars': 'warn',
    indent: 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
  },
  // ...
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json',
      },
      rules: {},
    },
    {
      rules: {
        'no-unused-vars': 'warn',
      },
    },
  ],
}
