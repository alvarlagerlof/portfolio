const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    serverComponentsExternalPackages: ["sanity", "next-sanity"],
  },
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
};

module.exports = withVercelToolbar(nextConfig);
