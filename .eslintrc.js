module.exports = {
  root: true,
  plugins: ['prettier', 'unused-imports'],
  extends: ['prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'unused-imports/no-unused-imports': 'error',
  },
};
