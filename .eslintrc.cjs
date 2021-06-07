/* jshint esversion 9  */
const typescript = require("typescript")
module.exports = {
  root: true,
  "extends": ["@nurdiansyah/devel"],
  parser: "@typescript-eslint/parser", // add the TypeScript parser
  plugins: [
    "@typescript-eslint" // add the TypeScript plugin
  ],
  "ignorePatterns": ["coverage", "libs", "node_modules", "build", "dist"],
  rules: {},
  settings: {},
  env: {
    node: true,
    es2020: true
  }
};
