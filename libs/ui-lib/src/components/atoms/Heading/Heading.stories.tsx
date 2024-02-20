/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj, StoryFn } from "@storybook/react";
import HeadingComponent from "./index";
import "@radix-ui/themes/styles.css";
import { HeadingLevels, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: HeadingComponent,
} as Meta<typeof HeadingComponent>;

type Story = StoryObj<typeof HeadingComponent>;

const Template: StoryFn<HeadingProps> = (args) => (
  <HeadingComponent {...args} />
);

export const Default: Story = {
  args: {
    children:
      "Default Heading just passing the text as in composition children pattern ",
  },
  render: Template,
};

export const CustomColor: Story = {
  args: {
    children:
      "While passing size prop you can use any size from the theme from 1 -6",
    color: "red",
  },
  render: Template,
};

const alignVariations = ["left", "center", "right"];
export const TextAlign: StoryFn = () => (
  <div className="flex-wrap flex flex-col gap-md">
    {alignVariations.map((align) => (
      <HeadingComponent key={align} align={align}>
        Heading {align}
      </HeadingComponent>
    ))}
  </div>
);

const variants: Array<HeadingLevels> = ["h1", "h2", "h3", "h4", "h5", "h6"];
export const HeadingSize: StoryFn = () => (
  <div className="flex-wrap flex flex-col gap-md">
    {variants.map((hSize) => (
      <HeadingComponent key={hSize} variant={hSize}>
        Heading {hSize}
      </HeadingComponent>
    ))}
  </div>
);
