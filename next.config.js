/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.tsx/,
      use: [
        defaultLoaders.babel,
      ],
    });

    return config;
  },
};
