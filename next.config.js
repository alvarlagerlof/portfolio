/** @type {import("next").NextConfig} */
module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
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
