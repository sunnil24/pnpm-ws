import { create } from "@storybook/theming/create";
import logoUrl from "../Genesis_logo.svg";

const computeStyle = (cssVar: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(cssVar);

// https://github.com/storybookjs/storybook/blob/next/code/lib/theming/src/types.ts
export const getTheme = ({ base }) => {
  return create({
    base,
    // Typography
    fontBase: '"sans-regular", sans-serif',
    fontCode: "monospace",

    brandTitle: "",
    brandUrl: "",
    brandImage: logoUrl,
    brandTarget: "_self",

  });
};
