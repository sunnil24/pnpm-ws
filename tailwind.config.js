import { baseTheme, tailwindConfig } from "@sldl/tailwind-config";
// import extractDesignSystemVariables from "./tailwind.config.viewer";

export const presets = [tailwindConfig];
export const important = true;
export const theme = {
  ...baseTheme,
  // configViewer: {
  //   themeReplacements: extractDesignSystemVariables(),
  // },
};
