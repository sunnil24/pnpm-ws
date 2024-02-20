import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import Button from "./index";
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<typeof Button>;

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: [
      "primaryContained",
      "primaryOutlined",
      "primaryLink",
      "secondaryContained",
      "secondaryOutlined",
      "secondaryLink",
    ],
    size: {
      control: { type: "radio" },
      options: ["md", "sm", "lg"],
    },
  },
} as Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof Button>;

const sizes: ButtonProps["size"][] = ["sm", "md", "lg"];

const primaryVarients: ButtonProps["variant"][] = [
  "primaryContained",
  "primaryOutlined",
  "primaryLink",
];
const scondaryVarient: ButtonProps["variant"][] = [
  "secondaryContained",
  "secondaryOutlined",
  "secondaryLink",
];

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Sizes: StoryFn = () => (
  <div className="flex-wrap flex items-center gap-md">
    {sizes.map((size) => (
      <Button
        className="m-1"
        variant={"primaryContained"}
        key={size}
        size={size}
      >
        Button {size}
      </Button>
    ))}
  </div>
);
Sizes.parameters = {
  docs: {
    source: {
      code: `<Button size="1">1</Button>
      <Button size="2">2</Button>
      <Button size="3">3</Button>
      `,
    },
  },
};
export const PrimaryVarients: StoryFn = () => (
  <div className="flex-wrap flex items-center gap-md">
    {primaryVarients.map((variant) => (
      <Button key={variant} variant={variant}>
        Button {variant}
      </Button>
    ))}
  </div>
);
PrimaryVarients.parameters = {
  docs: {
    source: {
      code: `<Button variant="primaryContained">Primary Contained Button</Button>
      <Button variant="primaryOutlined">Primary Outlined Button</Button>
      <Button variant="primaryLink">Primary Link Button</Button>
      `,
    },
  },
};

export const SecondaryVariants: StoryFn = () => (
  <div className="flex-wrap flex items-center gap-md">
    {scondaryVarient.map((variant) => (
      <Button key={variant} variant={variant}>
        Button {variant}
      </Button>
    ))}
  </div>
);
SecondaryVariants.parameters = {
  docs: {
    source: {
      code: `
           <Button variant="secondaryContained">Secondary Contained Button</Button>
           <Button variant="secondaryOutlined">Secondary Outlined Button</Button>
           <Button variant="secondaryLink">Secondary Link Button</Button>
      `,
    },
  },
};
