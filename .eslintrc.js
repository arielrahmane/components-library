module.exports = {
  root: true,
  extends: ['plugin:tailwindcss/recommended', 'plugin:@next/next/recommended'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
  },
  settings: {
    tailwindcss: {
      callees: ['classNames'],
      prependCustom: true,
    },
  },
};
