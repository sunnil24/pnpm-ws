import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import LabeledDataPair from "./index";
import { LabeledDataPairProps } from "./LabeledDataPair";

const meta: Meta<ComponentProps<typeof LabeledDataPair>> = {
  title: "Components/LabeledDataPair",
  component: LabeledDataPair,
  argTypes: {
    items: { control: "object" },
  },
};

export default meta;

const Template: Story<LabeledDataPairProps> = (args) => (
  <LabeledDataPair {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Default Label 1", data: "Default Data 1" },
    { label: "Default Label 2", data: "Default Data 2" },
  ],
};
