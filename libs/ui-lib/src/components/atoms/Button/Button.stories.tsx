import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import Button from './index';
import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<typeof Button>;

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['outline', 'contain', 'link'],
    },
    size: {
      control: { type: 'radio' },
      options: ['md', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes: ButtonProps['size'][] = ['lg', 'sm', 'md'];

const variants: ButtonProps['variant'][] = ['contain', 'outline', 'link'];

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Sizes: StoryFn = () => (
  <div className="flex-wrap flex items-center gap-md">
    {sizes.map((size) => (
      <Button key={size} size={size}>
        Button {size}
      </Button>
    ))}
  </div>
);

export const Variants: StoryFn = () => (
  <div className="flex-wrap flex items-center gap-md">
    {variants.map((variant) => (
      <Button key={variant} variant={variant}>
        Button {variant}
      </Button>
    ))}
  </div>
);
