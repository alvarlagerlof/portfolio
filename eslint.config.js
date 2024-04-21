// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [".next/**", ".yarn/**"],
  },
  ...[eslint.configs.recommended, ...tseslint.configs.recommended].map(conf => ({
    ...conf,
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  })),
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "error",
      // Throws TypeError: context.getAncestors is not a function
      "@next/next/no-duplicate-head": "off",
    },
  },
];
