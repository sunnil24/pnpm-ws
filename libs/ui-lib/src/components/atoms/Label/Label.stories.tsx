/* eslint-disable import/no-extraneous-dependencies */
// Label.stories.tsx
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Label from "./Label";

type LabelProps = ComponentProps<typeof Label>;

export default {
  title: "Components/Label",
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  children: "Label with Custom Class",
  className: "custom-class",
  labelFor: "label-custom",
};
