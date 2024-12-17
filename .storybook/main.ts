import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: [
    "../libs/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../apps/docs/*.mdx",
    "../apps/docs/**/*.mdx",
    "../libs/**/*.doc.mdx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath("@storybook/addon-themes"),
    "@chromatic-com/storybook"
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {},
  features: {},
  core: {
    builder: {
      name: getAbsolutePath("@storybook/builder-vite"),
      options: {
        viteConfigPath: "./vite.config.ts",
      },
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: true,
    reactDocgenTypescriptOptions: {
      /**
       * There is a bug in storybook.
       * StoryFn declared using `_args` won't use the displayName by default.
       */
      componentNameResolver: (expression) => {
        return expression.getName();
      },
    },
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
