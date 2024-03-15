module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'security/detect-object-injection': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-param-reassign': ['error', { props: false }],
  },
};
