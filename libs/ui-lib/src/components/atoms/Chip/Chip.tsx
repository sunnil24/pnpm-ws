import { Badge } from '@radix-ui/themes'
import { chipVariants } from './Chip.styles'
import { cn } from '@xyzproject/tailwind-config'

type ChipVariants =
  | 'new'
  | 'inProgess'
  | 'reviewReady'
  | 'reviewProgress'
  | 'reviewComplete'
  | 'tradeProgress'
  | 'eodComplete'

export interface ChipProps {
  content: string
  className?: string
}

const statusToVariantMap: Record<string, ChipVariants> = {
  New: 'new',
  'In Progress': 'inProgess',
  'Ready for Peer Review': 'reviewReady',
  'Peer Review In Progress': 'reviewProgress',
  'Peer Review Complete': 'reviewComplete',
  'Trade In Progress': 'tradeProgress',
  'EOD Complete': 'eodComplete',
}

const Chip: React.FC<ChipProps> = (props) => {
  const { content, className = '' } = props

  const applyClasses = (classes: object): string =>
    cn(
      chipVariants({
        variant: statusToVariantMap[content],
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
