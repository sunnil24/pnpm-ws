const { tailwindConfig } = require("@sldl/tailwind-config");
module.exports = {
  presets: [tailwindConfig],
  content: [
    ...tailwindConfig.content,
    " ../../node_modules/@sldl/**/**/index.js",
    // add this only if you are installing your ui component rather than using the symlinked version
    // use "../../node_modules/<ui-component-name>/dist/index.js" if you are NOT working with scoped names
  ],
};
