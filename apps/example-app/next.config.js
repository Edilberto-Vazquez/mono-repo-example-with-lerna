const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@example-ui/mathematical-operations",
  "@example-ui/material",
]);
module.exports = withPlugins([withTM()], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});
