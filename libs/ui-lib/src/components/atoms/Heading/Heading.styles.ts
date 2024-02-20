import { cva, VariantProps } from "class-variance-authority";

/**
 * The headingVariants object using class-variance-authority (cva) library,
 * which contains CSS classes for various heading variants.
 */
export const headingVariants = cva("text-black font-bold", {
  variants: {
    variant: {
      h1: ["text-5xl"],
      h2: ["text-4xl"],
      h3: ["text-3xl"],
      h4: ["text-2xl"],
      h5: ["text-xl"],
      h6: ["text-lg"],
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

/**
 * The HeadingVariantsProps interface extends the VariantProps interface of headingVariants object.
 */
export interface HeadingVariantsProps
  extends VariantProps<typeof headingVariants> {}
