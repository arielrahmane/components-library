module.exports = {
  root: true,
  extends: ['plugin:tailwindcss/recommended'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    tailwindcss: {
      callees: ['classNames'],
      whitelist: [
        'peer',
        'font-.+',
        'list-dot',
        'align-super',
        'bg-gradient-primary',
        'bg-gradient-secondary',
        'bg-gradient-tertiary',
        'swiper-.+',
        'max-w-screen-.+',
        'form-.+',
      ],
      prependCustom: true,
    },
  },
};
