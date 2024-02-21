import { Badge } from '@radix-ui/themes'
import { chipVariants } from './Chip.styles'
import { cn } from '@xyzproject/tailwind-config'

// ChipVariants =
// 0 maps to the content 'New'
// 1 maps to the content 'In Progress'
// 2 maps to the content 'Ready for Peer Review'
// 3 maps to the content 'Peer Review In Progress'
// 4 maps to the content 'Peer Review Complete'
// 5 maps to the content 'Trade In Progress'
// 6 maps to the content 'EOD Complete'

export type ChipVariants = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface ChipProps {
  content: string
  variation?: ChipVariants
  className?: string
}

const Chip: React.FC<ChipProps> = (props) => {
  const { content, className = '', variation = 0 } = props

  const applyClasses = (classes: object): string =>
    cn(
      chipVariants({
        variation,
        className,
      }),
      classes
    )

  return (
    <Badge variant='soft' className={applyClasses({})}>
      {content}
    </Badge>
  )
}

export default Chip
