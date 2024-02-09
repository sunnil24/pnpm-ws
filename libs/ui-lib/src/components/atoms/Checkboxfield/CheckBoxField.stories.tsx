/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import { CheckboxField, CheckboxProps } from './index';

export default {
  title: 'Components/Checkbox',
  component: CheckboxField,
  argTypes: {},
} as Meta<CheckboxProps>;

const DefaultTemplate = (args: CheckboxProps) => (
  <div className="flex items-center gap-md">
    <CheckboxField {...args} />
    <div className="flex items-center gap-md">Option 1</div>
  </div>
);

const VarientsTemplate: React.FC<CheckboxProps> = () => (
  <>
    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked variant="soft" /> Soft Varient
    </div>
    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked variant="classic" /> Classic Varient
    </div>
    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked variant="surface" /> Surface Varient
    </div>
  </>
);

const SizeTemplate = () => (
  <>
    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked size="1" value="option1" />
      Size 1
    </div>

    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked size="2" value="option2" />
      Size 2
    </div>
    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked size="3" value="option3" />
      Size 3
    </div>
  </>
);
const ColorTemplate = () => (
  <>
    <div className="flex items-center gap-md">
      <CheckboxField defaultChecked color="red" value="option1" />
      Custom Color Red
    </div>
  </>
);

export const Default = DefaultTemplate.bind({});
export const Varients = VarientsTemplate.bind({});
export const Size = SizeTemplate.bind({});
export const WithColor = ColorTemplate.bind({});
