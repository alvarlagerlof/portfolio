const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/feed.xml",
        destination: "/api/rss",
      },
    ];
  },
});
