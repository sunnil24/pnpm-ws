import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import TextAreaField from './index';

const variantsInfo = [
  {
    variant: 'surface',
    color: 'crimson',
    radius: 'medium',
    className: 'text-blue-500 mb-2',
    placeholder: 'Varient surface',
  },
  {
    variant: 'soft',
    color: 'crimson',
    radius: 'medium',
    className: 'text-blue-500 mt-2',
    placeholder: 'Varient soft',
  },
  {
    variant: 'classic',
    color: 'crimson',
    radius: 'medium',
    className: 'text-blue-500 mt-2',
    placeholder: 'Varient classic',
  },
];

const meta = {
  title: 'Components/TextAreaField',
  component: TextAreaField,
  argTypes: {},
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Text Area PlaceHolder',
  },
};

export const Variants: StoryFn = () => (
  <>
    {variantsInfo.map((variant, i) => (
      <TextAreaField key={i} {...variant} />
    ))}
  </>
);

export const CustomOutlineColor: StoryFn = () => (
  <>
    <TextAreaField placeholder="Text Area" color="purple" />
  </>
);
