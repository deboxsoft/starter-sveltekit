/* jshint esversion 9  */
const typescript = require("typescript")
module.exports = {
  plugins: [
    "svelte3",
    "@typescript-eslint" // add the TypeScript plugin
  ],
  overrides: [
    // this stays the same
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3"
    }
  ],
  rules: {},
  settings: {
    "svelte3/typescript": typescript, // pass the TypeScript package to the Svelte plugin,
    "svelte3/ignore-styles": () => true
    // ...
  },
  env: {
    browser: true,
    node: true,
    es2020: true
  }
};
