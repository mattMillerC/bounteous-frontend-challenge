const path = require('path');

module.exports = {
  // Registering stories
  stories: ["./stories/**/*.stories.[tj]s"],

  // Adjusting the webpack config for storybook to include sass compilation
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};