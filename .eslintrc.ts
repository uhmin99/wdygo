module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    indent: ['error', 2, {SwitchCase: 1}],
    semi: ['error', 'always'],
    quotes: ['error', 'double', {allowTemplateLiterals: true}],
    'brace-style': ['warn', '1tbs'],
    eqeqeq: ['warn', 'always', {null: 'ignore'}],
    '@typescript-eslint/no-explicit-any': 'warn',
    'new-parens': ['error', 'always'],
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
};
