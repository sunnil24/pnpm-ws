import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className='flex justify-between'>
        <div>Left End</div>
        <div>Right End</div>
      </div>
    ),
  },
}
