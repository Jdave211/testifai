// craco.config.js
const utilFallback = "util/";

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add a fallback for the 'util' module
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        util: require.resolve(utilFallback),
      };

      return webpackConfig;
    },
  },
};

