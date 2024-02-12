import { tailwindConfig } from "@xyzproject/tailwind-config"
import extractDesignSystemVariables from "./tailwind.config.viewer"

export const presets = [tailwindConfig]
export const important = true
export const theme = {
  // ...baseTheme,
  configViewer: {
    themeReplacements: extractDesignSystemVariables(),
  },
  extend: {
    colors: {
      "loader-segment": "#707070",
      "loader-track": "#C4C4C4",
    },
  },
}
