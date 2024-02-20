import { cva, VariantProps } from 'class-variance-authority'

/**
 * The headingVariants object using class-variance-authority (cva) library,
 * which contains CSS classes for various heading variants.
 */
export const headingVariants = cva('text-black font-bold', {
  variants: {
    headingLevel: {
      heading: ['text-5xl'],
      subheading: ['text-4xl'],
      'section-heading': ['text-xl'],
    },
  },
  defaultVariants: {
    headingLevel: 'heading',
  },
})

/**
 * The HeadingVariantsProps interface extends the VariantProps interface of headingVariants object.
 */
export interface HeadingVariantsProps
  extends VariantProps<typeof headingVariants> {}
