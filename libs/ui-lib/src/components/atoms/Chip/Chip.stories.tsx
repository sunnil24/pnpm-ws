import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import Chip from './index'
import { ChipProps } from './Chip'

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta<typeof Chip>

type Story = StoryObj<typeof Chip>

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />

export const Default: Story = {
  args: {
    content: 'Test Content',
  },
  render: Template,
}

const statusVariants: Array<string> = [
  'New',
  'In Progress',
  'Ready for Peer Review',
  'Peer Review In Progress',
  'Peer Review Complete',
  'Trade In Progress',
  'EOD Complete',
]
export const StatusVariants: StoryFn = () => (
  <div className='flex  gap-md'>
    {statusVariants.map((content) => (
      <Chip className='mr-3' key={content} content={content} />
    ))}
  </div>
)
