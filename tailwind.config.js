import { tailwindConfig } from "@xyzproject/tailwind-config"
import extractDesignSystemVariables from "./tailwind.config.viewer"
import { baseTheme } from "@xyzproject/tailwind-config"

export const presets = [tailwindConfig]
export const important = true
export const theme = {
  ...baseTheme,
  configViewer: { 
    themeReplacements: extractDesignSystemVariables(),
  }
}
