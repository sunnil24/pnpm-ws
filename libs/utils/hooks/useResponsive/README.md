# useResponsive Hook

## Description

`useResponsive` is a custom React hook that provides a way to handle responsive design within your React components. It provides an object containing boolean values for different screen sizes (xs, sm, md, lg, xl), allowing you to conditionally render components based on the current screen size.

## Why useResponsive?

Designing for multiple screen sizes is a common requirement in modern web development. `useResponsive` simplifies this process by providing a way to reactively handle changes in screen size. This means you can conditionally render components based on the current screen size without having to manually add event listeners or resize handlers.

## Installation

```sh
npm install @your-org/use-responsive-hook

or 

yarn add @your-org/use-responsive-hook
```

## Usage

```jsx
// First, import the `useResponsive` hook at the top of your file:
import { useResponsive } from './useResponsive';

// Then, within your component, call useResponsive to get an object containing the current screen size information:

function MyComponent() {
  const responsive = useResponsive();

  if (responsive.md) {
    return <div>I'm visible on medium screens and up!</div>;
  } else {
    return <div>I'm visible on small screens!</div>;
  }
}

// In the above example, responsive.md will be true if the screen width is greater than or equal to the md breakpoint (768px by default), and false otherwise.

// You can also customize the breakpoints by calling configResponsive:
import { configResponsive } from './useResponsive';

configResponsive({
  small: 0,
  medium: 600,
  large: 1200,
});
// In the above example, the small, medium, and large breakpoints are set to 0px, 600px, and 1200px, respectively.
```