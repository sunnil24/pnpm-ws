// Dropdown.stories.tsx
import { Story, Meta } from '@storybook/react';

// Import the Dropdown component and its props
import { Dropdown, DropdownProps } from './Dropdown';

// Define the mock data for the dropdown
const optionsA = [
  { id: '1', value: 'Option 1', textValue: 'Option 1', disabled: false },
  { id: '2', value: 'Option 2', textValue: 'Option 2', disabled: false },
  { id: '3', value: 'Option 3', textValue: 'Option 3', disabled: false },
];

const optionsB = [
  { id: '3', value: 'Option 1', textValue: 'Option 1', disabled: true },
  { id: '3', value: 'Option 2', textValue: 'Option 2', disabled: true },
  { id: '3', value: 'Option 3', textValue: 'Option 3', disabled: true },
];

// Default export for the Storybook
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

// Define a template for the stories
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Define the stories
export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Option 1',
  options: optionsA,
};

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  defaultValue: '',
  options: optionsB,
};