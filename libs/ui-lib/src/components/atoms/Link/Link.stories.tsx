import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Link from "./index";

type LinkProps = ComponentProps<typeof Link>;

const meta: Meta<LinkProps> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "https://example.com",
  children: "Example Link",
};
