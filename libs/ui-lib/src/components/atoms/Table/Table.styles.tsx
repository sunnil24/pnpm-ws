/* eslint-disable import/no-extraneous-dependencies */
import { cva, VariantProps } from "class-variance-authority";

/**
 * The buttonVariants object using class-variance-authority (cva) library,
 * which contains CSS classes for various button variants.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        primaryContained: [
          "bg-button-primary",
          "text-button-primary-text",
          "hover:bg-button-primary-hover",
          "hover:text-button-primary-text",
        ],
        primaryOutlined: [
          "border-button-primary",
          "rounded",
          "text-button-primary",
          "border-button-primary-border",
          "border-2",
          "m-2",
          "hover:bg-button-primary-hover",
          "hover:text-button-primary-text",
        ],
        primaryLink: [
          "underline-offset-4 ",
          "hover:underline ",
          "text-button-primary",
        ],
        secondaryContained: [
          "bg-button-secondary",
          "text-button-secondary-text",
          "hover:bg-button-secondary-hover",
          "hover:text-button-secondary-text",
        ],
        secondaryOutlined: [
          "border-button-secondary",
          "rounded",
          "text-button-secondary",
          "border-button-secondary-border",
          "border-2",
          "m-2",
          "hover:bg-button-secondary-hover",
          "hover:text-button-secondary-text",
        ],
        secondaryLink: [
          "underline-offset-4 ",
          "hover:underline ",
          "text-button-secondary",
        ],
      },
      size: {
        md: ["h-10 ", "py-2 ", "px-4"],
        sm: ["h-9 ", "px-3 ", "rounded-md'"],
        lg: ["h-11 ", "px-8 ", "rounded-md"],
      },
    },
    defaultVariants: {
      variant: "primaryContained",
      size: "md",
    },
  },
);

/**
 * The ButtonVariantsProps interface extends the VariantProps interface of buttonVariants object.
 */
export interface ButtonVariantsProps
  extends VariantProps<typeof buttonVariants> {}
