import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import Modal from './index'
import Button from '../../atoms/Button'

type ModalProps = ComponentProps<typeof Modal>

const meta: Record<string, any> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as Meta<ModalProps>

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    modalOpen: true,
    title: 'Modal title goes here and would span only up to a certain width',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ctaArray: [<Button>Okay</Button>],
  },
}
