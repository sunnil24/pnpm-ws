import {baseTheme} from "../themes"

 const content = [
  "./libs/ui-lib/src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./apps/**/*.{js,ts,jsx,tsx,mdx}",
];

export const tailwindConfig = {
  darkMode: ["class", '[data-mode="dark"]'],
  content,
  theme: {
    ...baseTheme,
    extend:{
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    }
  },
  plugins: [],
};

