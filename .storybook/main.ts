import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // previewHead(head, options) {
  //   console.log("TETE", JSON.stringify(head), JSON.stringify(options))
  //   return `
  //   <style>tja</style/>${head}
  //   <style>
  //     #main {
  //       background-color: yellow;
  //     }
  //   </style>
  // `
  // },
};
export default config;
