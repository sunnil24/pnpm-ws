import { tailwindConfig } from "@sldl/tailwind-config";
import extractDesignSystemVariables from "./tailwind.config.viewer";
import { baseTheme } from "@sldl/tailwind-config";

export const presets = [tailwindConfig];
export const important = true;
export const theme = {
  ...baseTheme,
  configViewer: {
    themeReplacements: extractDesignSystemVariables(),
  },
};
