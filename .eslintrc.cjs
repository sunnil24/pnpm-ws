const linting = require('@xyzproject/react-linting-standards');

module.exports = {
  ...linting,
/// <reference types="vite/client" />
  ignorePatterns: ["dist", "node_modules","*.config.ts","*.d.ts","scripts"]
  // Add any other configurations as needed
};