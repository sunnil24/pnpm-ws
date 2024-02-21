import { cva, VariantProps } from 'class-variance-authority'

/**
 * The chipVariants object using class-variance-authority (cva) library,
 * which contains CSS classes for various chip variants.
 */
export const chipVariants = cva('text-xs font-semibold py-1 px-2 rounded', {
  variants: {
    variant: {
      new: ['bg-[--badge-green-bg] text-[--badge-green-text]'],
      inProgess: ['bg-[--badge-blue-bg] text-[--badge-blue-text]'],
      reviewReady: ['bg-[--badge-beige-bg] text-[--badge-beige-text]'],
      reviewProgress: ['bg-[--badge-beige-bg] text-[--badge-beige-text]'],
      reviewComplete: ['bg-[--badge-peach-bg] text-[--badge-peach-text]'],
      tradeProgress: ['bg-[--badge-lilac-bg] text-[--badge-lilac-text]'],
      eodComplete: ['bg-[--badge-grey-bg] text-[--badge-grey-text]'],
    },
  },
  defaultVariants: {
    variant: 'new',
  },
})

/**
 * The ChipVariantsProps interface extends the VariantProps interface of chipVariants object.
 */
export interface ChipVariantsProps extends VariantProps<typeof chipVariants> {}
