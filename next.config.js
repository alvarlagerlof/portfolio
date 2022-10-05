const { withNextBanner } = require("next-banner");
const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()(
  withNextBanner({
    nextBanner: {
      domain: "https://" + process.env.NEXT_PUBLIC_VERCEL_URL,
    },
    images: {
      domains: ["cdn.sanity.io"],
    },
    experimental: { images: { allowFutureImage: true } },
  })
);
