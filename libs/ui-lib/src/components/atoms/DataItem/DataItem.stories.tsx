import type { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import DataItem from "./index";
import { DataItemProps } from "./DataItem";

const meta: Meta<ComponentProps<typeof DataItem>> = {
  title: "Components/DataItem",
  component: DataItem,
  argTypes: {
    label: { control: "text" },
    data: { control: "text" },
  },
};

export default meta;

const DefaultTemplate: Story<DataItemProps> = (args) => <DataItem {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: "Default Label",
  data: "Default Data",
};
