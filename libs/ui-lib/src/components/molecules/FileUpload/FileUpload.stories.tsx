import type { Meta } from "@storybook/react";
import { ComponentProps } from "react";
import FileUpload from "./index";
import { FileUploadProps } from "./FileUpload";

const meta: Meta<ComponentProps<typeof FileUpload>> = {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    onUpload: { action: "uploaded" },
  },
};
const DefaultTemplate = (args: FileUploadProps) => (
  <div className="flex items-center gap-md">
    <FileUpload {...args} />
    <div className="flex items-center gap-md">Option 1</div>
  </div>
);

export default meta;

export const Default = DefaultTemplate.bind({});
