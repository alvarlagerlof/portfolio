const colors = require("tailwindcss/colors");
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
      variants("inflate", ["responsive"])
    );
  });
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
        primary: colors.green[600],
        separator: colors.gray[400],
      },
      fontFamily: {
        heading: ["MADE Dillan", "sans-serif"],
        subheading: ["Space Text", "sans-serif"],
        content: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    // extend: {},
  },
  plugins: [inflatePlugin, typographyPlugin],
};
