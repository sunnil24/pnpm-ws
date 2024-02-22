// Toast.stories.tsx

import type { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Toast from "./Toast";

type ToastProps = ComponentProps<typeof Toast>;

const meta: Meta = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    handleClose: { action: "clicked" },
    message: { control: "text" },
    position: { control: "text" },
    type: {
      control: { type: "select", options: ["success", "error", "warning"] },
    },
  },
};

export default meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "Operation successful",
  position: "top-0",
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  message: "Operation failed",
  position: "top-0",
  type: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Operation warning",
  position: "top-0",
  type: "warning",
};
export const Default = Success.bind({});
