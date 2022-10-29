const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
    runtime: "experimental-edge", // 'node.js' (default) | experimental-edge},
  },
});
