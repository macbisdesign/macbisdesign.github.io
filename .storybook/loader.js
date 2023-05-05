// .storybook/main.js
module.exports = {
    webpackFinal: async (config, { configType }) => {
      // Add the following line to include your custom loader.js file
      config.entry.push(require.resolve('../loader'));
      // Other Storybook configuration options...
      return config;
    },
  };
  