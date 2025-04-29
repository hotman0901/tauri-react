import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      "simple-import-sort": simpleImportSort,
    },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  reactHooks.configs["recommended-latest"],
  pluginReact.configs.flat.recommended,
  {
    rules: {
      semi: [2, "always"],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react-hooks/rules-of-hooks": 0,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react/no-unescaped-entities": 0,
      "no-console": 1,
      "comma-dangle": 0,
      quotes: [
        2,
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
