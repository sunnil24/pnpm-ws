import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Textfield } from './Textfield';

const variantsInfo = [
  {
    variant: "surface",
    color: 'crimson',
    radius: 'medium',
    className: 'text-blue-500 mb-2',
    placeholder: 'Varient surface',
  },
  {
    variant: "soft",
    color: 'crimson',
    radius: 'medium',
    className: 'text-blue-500 mt-2',
    placeholder: 'Varient soft',
  },
  {
    variant: "classic",
    color: 'crimson',
    radius: 'medium',
    className: 'text-blue-500 mt-2',
    placeholder: 'Varient classic',
  },
];

const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  argTypes: {
    rootProps: {
      size: '1',
      variant: 'surface',
      radius: 'small',
      className: 'text-blue-500',
    },
    inputProps: {
      size: '3',
      variant: 'surface',
      color: 'crimson',
      radius: 'medium',
      className: 'text-blue-500',
      placeholder: 'Text Field',
    },
    slotProps: {
      color: 'gold',
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rootProps: {
      size: '1',
      variant: "surface",
      radius: 'small',
      className: 'text-blue-500',
    },
    inputProps: {
      size: '3',
      variant: "surface",
      color: 'crimson',
      radius: 'medium',
      className: 'text-blue-500',
      placeholder: 'Text Field',
    },
    
    slotProps: {
      isIconEnabled: false,
      gap: '2',
      children: null,
    },
  },
};

export const Variants: StoryFn = () => (
  <>
    {variantsInfo.map((variant, i) => (
      <Textfield key={i} inputProps={variant} />
    ))}
  </>
);

export const WithIcon: StoryFn = () => (
  <>
    <Textfield
      slotProps={{
        isIconEnabled: true,
        gap: '2',
        children: <MagnifyingGlassIcon height="16" width="16" />,
      }}
    />
  </>
);