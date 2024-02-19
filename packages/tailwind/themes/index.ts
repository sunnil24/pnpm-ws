export const baseTheme = {
  container: {
    center: true,
    padding: {
      sm: "var(--padding-sm)",
      md: "var(--padding-md)",
      lg: "var(--padding-lg)",
      xl: "var(--padding-xl)",
      "2xl": "var(--padding-2xl)",
    },
    screens: {
      sm: "var(--screen-sm)",
      md: "var(--screen-md)",
      lg: "var(--screen-lg)",
      xl: "var(--screen-xl)",
      "2xl": "var(--screen-2xl)",
    },
  },
  extend: {
    gridTemplateColumns: {
      "16": "repeat(16, minmax(0, 1fr))",
    },
    colors: {
      basics: {
        ltgrey: "var(--ltgrey)",
        black: "var(--black)",
        white: "var(--white)",
        error: "var(--error)",
        warning: "var(--warning)",
        success: "var(--success)",
        overlay: "var(--overlay)",
        grey10: "var(--coolgrey-10)",
        grey20: "var(--coolgrey-20)",
        grey30: "var(--coolgrey-30)",
        grey40: "var(--coolgrey-40)",
        grey50: "var(--coolgrey-50)",
        grey60: "var(--coolgrey-60)",
        grey70: "var(--coolgrey-70)",
        grey80: "var(--coolgrey-80)",
        grey90: "var(--coolgrey-90)",
        grey100: "var(--coolgrey-100)",
      },
      body: "var(--color-body)",
      background: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
      },
      para: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      button: {
        primary: {
          DEFAULT: "var(--color-button-primary-background)",
          border: "var(--color-button-primary-border)",
          text: "var(--color-button-primary-text)",
          hover: "var(--color-button-primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--color-button-secondary-background)",
          border: "var(--color-button-secondary-border)",
          text: "var(--color-button-secondary-text)",
          hover: "var(--color-button-secondary-hover)",
        },
        tertiary: {
          DEFAULT: "var(--color-button-tertiary-background)",
          text: "var(--color-button-tertiary-text)",
          hover: "var(--color-button-tertiary-hover)",
        },
      },
      form: {
        primary: {
          DEFAULT: "var(--color-form-primary-background)",
          border: "var(--color-form-primary-border)",
          text: "var(--color-form-primary-text)",
          hover: "var(--color-form-primary-hover)",
        },
      },
    },
    fontFamily: {
      custom: ["CustomFont"], // Declare Custom Font Name
    },
  },
};
