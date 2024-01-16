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
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
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
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: {
      name: "@storybook/builder-vite",
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
