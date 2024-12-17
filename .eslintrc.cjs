const linting = require("@sldl/react-linting-standards");

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
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.tsx"],
      },
    ],
  },
  // Add any other configurations as needed
};
