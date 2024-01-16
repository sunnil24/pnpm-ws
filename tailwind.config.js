const tailwindConfig = require("@xyzproject/tailwind-config-design-system/config/tailwind.config.cjs");

const extractDesignSystemVariables = require("./tailwind.config.viewer");

tailwindConfig.theme = {
    ...tailwindConfig.theme,
        configViewer: {
            themeReplacements: {
              ...extractDesignSystemVariables(),
            },
          }
}
module.exports = tailwindConfig;
