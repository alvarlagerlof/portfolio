module.exports = {
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://plausible.io/js/plausible.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};
