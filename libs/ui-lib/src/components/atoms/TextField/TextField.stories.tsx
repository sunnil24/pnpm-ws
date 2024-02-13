/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Text from './index';

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
  title: 'Components/TextField',
  component: Text,
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
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
      isIconEnabled: false,
      gap: '2',
      children: null,
    },
  },
};

export const Variants: StoryFn = () => (
  <>
    {variantsInfo.map((variant, i) => (
      <div className='mb-2' key={i}>
      <Text  inputProps={variant} />

      </div>
    ))}
  </>
);

export const WithIcon: StoryFn = () => (
  <>
    <Text
      slotProps={{
        isIconEnabled: true,
        gap: '2',
        children: <MagnifyingGlassIcon height="16" width="16" />,
      }}
    />
  </>
);
