# Peer Dependency Installation

Ensure that all peer dependencies are installed in the package consuming this package. Run the following command:

```bash
yarn add eslint eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-tailwindcss @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-plugin-testing-library  eslint-plugin-jest-dom eslint-config-prettier tailwindcss eslint-plugin-sort-destructure-keys eslint-import-resolver-custom-alias prettier @ianvs/prettier-plugin-sort-imports prettier-plugin-packagejson prettier-plugin-tailwindcss
 --save-dev

tsconfig.json
In the root of the application that will consume this package, make sure there is a tsconfig.json file.

.eslintrc.js Configuration
In the .eslintrc.js file at the root of the app consuming this package, add the following content:
module.exports = {
  extends: ['./node_modules/nuveen-org-linting'],
  // Add any other configurations as needed
};
Package.json Scripts
Update the scripts section in the package.json file of the application consuming this package to include linting commands:
"scripts": {
  "lint": "eslint '/*.{ts,tsx}'",
  "lint:fix": "eslint '/*.{ts,tsx}' --fix",
  // Add any other scripts as needed
}