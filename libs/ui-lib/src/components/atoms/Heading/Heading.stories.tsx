/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import HeadingComponent from './index';
import '@radix-ui/themes/styles.css';
import { HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: HeadingComponent,
} as Meta<typeof HeadingComponent>;

type Story = StoryObj<typeof HeadingComponent>;

const Template: StoryFn<HeadingProps> = (args) => (
  <HeadingComponent {...args} />
);

export const Default: Story = {
  args: {
    children:
      'Default Heading just passing the text as in composition children pattern ',
  },
  render: Template,
};

export const CustomColor: Story = {
  args: {
    children:
      'While passing size prop you can use any size from the theme from 1 -6',
    color: 'red',
  },
  render: Template,
};

const weightVariations = ['regular', 'medium', 'bold'];
export const TextWeight: StoryFn = () => (
  <div className="flex-wrap flex flex-col gap-md">
    {weightVariations.map((weight) => (
      <HeadingComponent key={weight} weight={weight}>
        Heading {weight}
        <br></br>
        <br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </HeadingComponent>
    ))}
  </div>
);

const sizeVariations = ['1', '2', '3', '4', '5', '6'];
export const TextSizes: StoryFn = () => (
  <div className="flex-wrap flex flex-col gap-md">
    {sizeVariations.map((size) => (
      <HeadingComponent key={size} size={size}>
        Heading Size {size}
        <br></br>
        <br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </HeadingComponent>
    ))}
  </div>
);
const alignVariations = ['left', 'center', 'right'];
export const TextAlign: StoryFn = () => (
  <div className="flex-wrap flex flex-col gap-md">
    {alignVariations.map((align) => (
      <HeadingComponent key={align} align={align}>
        Heading {align}
      </HeadingComponent>
    ))}
  </div>
);
