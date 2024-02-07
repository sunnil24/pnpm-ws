import { tailwindConfig } from '@xyzproject/tailwind-config-design-system';
import extractDesignSystemVariables from './tailwind.config.viewer';

export const presets = [tailwindConfig];
export const important = true;
export const theme = {
  // ...baseTheme,
  configViewer: {
    themeReplacements: extractDesignSystemVariables(),
  },
};