/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    serverComponentsExternalPackages: ["sanity", "next-sanity"],
    ppr: true,
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

export default nextConfig;
