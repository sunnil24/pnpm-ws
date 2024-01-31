const  {tailwindConfig}  = require("@xyzproject/tailwind-config-design-system")
const extractDesignSystemVariables  = require("./tailwind.config.viewer")

module.exports = {
  presets: [tailwindConfig],
  important: true,
  theme: {
    // ...baseTheme,
    configViewer: {
      themeReplacements: extractDesignSystemVariables(),
    },
  },
};