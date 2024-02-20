const linting = require("@xyzproject/react-linting-standards");

module.exports = {
  ...linting,
  /// <reference types="vite/client" />
  ignorePatterns: ["dist", "node_modules", "*.config.ts", "*.d.ts", "scripts"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        // Add your Prettier configuration here
        endOfLine: "auto",
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  }
  // Add any other configurations as needed
};
