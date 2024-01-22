import {tailwindConfig} from "@xyzproject/tailwind-config-design-system";

import {extractDesignSystemVariables} from "./tailwind.config.viewer";

tailwindConfig.theme = {
    ...tailwindConfig.theme,
        configViewer: {
            themeReplacements: {
              ...extractDesignSystemVariables(),
            },
          }
}
module.exports = tailwindConfig;
