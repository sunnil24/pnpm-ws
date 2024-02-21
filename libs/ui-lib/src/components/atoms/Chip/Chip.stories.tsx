import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import Chip from './index'
import { ChipProps, ChipVariants } from './Chip'

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

const statusVariants: Array<ChipVariants> = [0, 1, 2, 3, 4, 5, 6]
export const StatusVariants: StoryFn = () => (
  <div className='flex  gap-md'>
    {statusVariants.map((variant) => (
      <Chip
        className='mr-3'
        key={variant}
        content={'Test Content'}
        variation={variant}
      />
    ))}
  </div>
)
