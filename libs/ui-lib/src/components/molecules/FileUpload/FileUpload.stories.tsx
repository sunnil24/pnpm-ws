import type { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import FileUpload, { FileUploadProps } from "./FileUpload";

const meta: Meta<ComponentProps<typeof FileUpload>> = {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    onUpload: { action: "uploaded" },
    uploadText: { control: "text" },
    fileFormatText: { control: "text" },
  },
};

export default meta;

const DefaultTemplate: Story<FileUploadProps> = (args) => (
  <FileUpload {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  uploadText: "Upload File",
  fileFormatText: "Upload an Excel file format",
  dragText: "or drop file to upload",
};
