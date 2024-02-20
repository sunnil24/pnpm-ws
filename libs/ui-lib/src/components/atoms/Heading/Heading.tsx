// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading, headingPropDefs } from '@radix-ui/themes'
import { headingVariants } from './Heading.styles'
import { cn } from '@xyzproject/tailwind-config'

type HeadingPropsDif = typeof headingPropDefs

export interface HeadingProps extends HeadingPropsDif {
  children: React.ReactNode
  className?: string
  headingLevel: 'heading' | 'subheading' | 'section-heading'
}

const HeadingComponent = (props: HeadingProps) => {
  const { children, className, headingLevel = 'heading' } = props

  const applyClasses = (classes: object): string =>
    cn(
      headingVariants({
        headingLevel,
        className,
      }),
      classes
    )

  return (
    // @ts-ignore
    <Heading className={applyClasses({})} {...props}>
      {children}
    </Heading>
  )
}

export default HeadingComponent
