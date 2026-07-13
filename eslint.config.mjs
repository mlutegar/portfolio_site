import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: ["build/**", "dist/**", "node_modules/**", "coverage/**"]
  },
  js.configs.recommended,
  {
    // Scripts de build ESM (.mjs) e config: globals de Node.
    files: ["*.mjs", "scripts/**/*.mjs", "vite.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {...globals.node}
    }
  },
  {
    // fetch.js é um script CommonJS legado.
    files: ["fetch.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {...globals.node}
    }
  },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {jsx: true}
      }
    },
    settings: {
      react: {version: "detect"}
    },
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Vite/React 18: não é preciso importar React em escopo para JSX.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Aspas literais em texto JSX são intencionais neste projeto (citações, código).
      "react/no-unescaped-entities": "off",
      "no-unused-vars": ["warn", {argsIgnorePattern: "^_"}]
    }
  },
  {
    // Arquivos de teste (Vitest) usam globals de teste.
    files: ["**/*.test.{js,jsx}", "src/setupTests.js"],
    languageOptions: {
      globals: {...globals.vitest, ...globals.jest}
    }
  }
];
