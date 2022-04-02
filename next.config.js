const { withNextBanner } = require("next-banner");
const { withPlausibleProxy } = require("next-plausible");

// module.exports = withPlausibleProxy()({
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// });

module.exports = withPlausibleProxy()(
  withNextBanner({
    nextBanner: {
      domain: process.env.NEXT_PUBLIC_VERCEL_URL,
    },
    images: {
      domains: ["cdn.sanity.io"],
    },
  })
);
