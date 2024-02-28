import { cva, VariantProps } from 'class-variance-authority'

/**
 * The chipVariants object using class-variance-authority (cva) library,
 * which contains CSS classes for various chip variants.
 */
export const chipVariants = cva('text-xs font-semibold py-1 px-2 rounded', {
  variants: {
    variation: {
      1: ['bg-[--badge-green-bg] text-[--badge-green-text]'],
      2: ['bg-[--badge-blue-bg] text-[--badge-blue-text]'],
      3: ['bg-[--badge-beige-bg] text-[--badge-beige-text]'],
      4: ['bg-[--badge-lightblue-bg] text-[--badge-lightblue-text]'],
      5: ['bg-[--badge-red-bg] text-[--badge-red-text]'],
      6: ['bg-[--badge-lilac-bg] text-[--badge-lilac-text]'],
      7: ['bg-[--badge-grey-bg] text-[--badge-grey-text]'],
    },
  },
  defaultVariants: {
    variation: 1,
  },
})

/**
 * The ChipVariantsProps interface extends the VariantProps interface of chipVariants object.
 */
export interface ChipVariantsProps extends VariantProps<typeof chipVariants> {}
