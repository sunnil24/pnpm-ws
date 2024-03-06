// Select.stories.tsx

import type { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Select from "./index";

type SelectProps = ComponentProps<typeof Select>;

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    options: {
      control: {
        type: "array",
      },
      defaultValue: ["Apple", "Banana", "Blueberry"],
    },
  },
};

export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "fruits",
  options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
};

export const WithFewOptions = Template.bind({});
WithFewOptions.args = {
  id: "fruits1",
  options: ["Apple", "Banana"],
};

export const WithManyOptions = Template.bind({});
WithManyOptions.args = {
  id: "fruits2",
  options: [
    "Apple",
    "Banana",
    "Blueberry",
    "Grapes",
    "Pineapple",
    "Mango",
    "Orange",
    "Strawberry",
  ],
};
