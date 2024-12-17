import React from "react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { DocsContainer, DocsContainerProps } from "@storybook/blocks";
import "@sldl/tailwind-config/styles/tailwind.css";

interface ExampleContainerProps extends DocsContainerProps {
  children: React.ReactNode;
}

const ExampleContainer = ({ children, ...props }: ExampleContainerProps) => {
  return (
    <DocsContainer {...props}>
      <div id="doc-container">{children}</div>
    </DocsContainer>
  );
};

export const parameters = {
  docs: {
    container: ExampleContainer,
  },
  options: {
    storySort: {
      order: [
        "Getting Started",
        "Tailwind Variables",
        "Packages",
        "Components",
        "*",
      ],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
  (storyFn, { id, viewMode }) => {
    return (
      <div className="relative w-full">
        {viewMode === "docs" && (
          <div className="absolute -right-lg -top-xl">
            <a href={`/iframe.html?&id=${id}`} target="_blank"></a>
          </div>
        )}
        {storyFn()}
      </div>
    );
  },
];
