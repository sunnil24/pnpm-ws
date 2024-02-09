/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import { RadioGroupItem, RadioGroupRoot } from './index';

type RadioGroupRootProps = ComponentProps<typeof RadioGroupRoot>;

export default {
  title: 'Components/RadioGroup',
  component: RadioGroupRoot,
  argTypes: {
    value: {
      control: { type: 'radio' },
      options: ['option1', 'option2', 'option3'],
    },
  },
} as Meta<RadioGroupRootProps>;

const DefaultTemplate = (args: RadioGroupRootProps) => (
  <RadioGroupRoot {...args}>
    <div className="flex items-center gap-md">
      <RadioGroupItem value="option1" />
      Option 1
    </div>
    <div className="flex items-center gap-md">
      <RadioGroupItem value="option2" />
      Option 2
    </div>
    <div className="flex items-center gap-md">
      <RadioGroupItem value="option3" />
      Option 3
    </div>
  </RadioGroupRoot>
);
const SizeTemplate = (args: RadioGroupRootProps) => (
  <>
    <RadioGroupRoot size="1" {...args}>
      <div className="flex items-center gap-md">
        <RadioGroupItem value="option1" />
        Size 1
      </div>
    </RadioGroupRoot>

    <RadioGroupRoot size="2" {...args}>
      <div className="flex items-center gap-md">
        <RadioGroupItem value="option2" />
        Size 2
      </div>
    </RadioGroupRoot>

    <RadioGroupRoot size="3" {...args}>
      <div className="flex items-center gap-md">
        <RadioGroupItem value="option3" />
        Size 3
      </div>
    </RadioGroupRoot>
  </>
);
const ColorTemplate = (args: RadioGroupRootProps) => (
  <>
    <RadioGroupRoot color="red" size="1" {...args}>
      <div className="flex items-center gap-md">
        <RadioGroupItem value="option1" />
        Custom Color Red
      </div>
    </RadioGroupRoot>
  </>
);

export const Default = DefaultTemplate.bind({});
export const Size = SizeTemplate.bind({});
export const WithColor = ColorTemplate.bind({});
