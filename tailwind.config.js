// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const typographyPlugin = require("@tailwindcss/typography");

const inflatePlugin = function ({ addComponents, theme, variants, e }) {
  const spacing = theme("spacing", {});

  Object.entries(spacing).forEach(([name, padding]) => {
    addComponents(
      {
        [`.${e(`inflate-${name}`)} > *`]: { padding },
        [`.${e(`inflate-x-${name}`)} > *`]: {
          paddingLeft: padding,
          paddingRight: padding,
          "&:first-child": { paddingLeft: 0 },
          "&:last-child": { paddingRight: 0 },
        },
        [`.${e(`inflate-y-${name}`)} > *`]: {
          paddingTop: padding,
          paddingBottom: padding,
          "&:first-child": { paddingTop: 0 },
          "&:last-child": { paddingBottom: 0 },
        },
      },
      variants("inflate", ["responsive"]),
    );
  });
};

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
      },
      colors: {
        primary: colors.green[700],
        separator: colors.gray[400],
        skeleton: colors.slate[200],
        imgborder: colors.gray[400],
      },
      fontFamily: {
        heading: ["var(--font-made-dillan)"],
        subheading: ["var(--font-space-text)"],
      },
    },
  },
  plugins: [inflatePlugin, typographyPlugin],
};
