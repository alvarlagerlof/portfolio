const { withHighlightConfig } = require("@highlight-run/next/server");
const nextBuildId = require("next-build-id");

/** @type {import("next").NextConfig} */
module.exports = withHighlightConfig({
  images: {
    domains: ["cdn.sanity.io"],
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["sanity", "next-sanity"],
    instrumentationHook: true,
  },
  productionBrowserSourceMaps: false,
  async rewrites() {
    return [
      {
        source: "/feed.xml",
        destination: "/api/rss",
      },
      {
        source: "/js/script.outbound-links.js",
        destination: "https://plausible.io/js/script.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
});
