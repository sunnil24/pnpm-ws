/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Paragraph from './index';
import '@radix-ui/themes/styles.css';
import { ParagraphProps } from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
  // argTypes
} as Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

const Template: StoryFn<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default: Story = {
  args: {
    children:
      'Default paragraph just passing the text as in composition children pattern ',
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
  <div className="flex-wrap flex items-center gap-md">
    {weightVariations.map((weight) => (
      <Paragraph key={weight} weight={weight}>
        Pararagraph {weight}
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
      </Paragraph>
    ))}
  </div>
);

const sizeVariations = ['1', '2', '3', '4', '5', '6'];
export const TextSizes: StoryFn = () => (
  <div className="flex-wrap flex items-center gap-md">
    {sizeVariations.map((size) => (
      <Paragraph key={size} size={size}>
        Pararagraph Size {size}
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
      </Paragraph>
    ))}
  </div>
);
const alignVariations = ['left', 'center', 'right'];
export const TextAlign: StoryFn = () => (
  <div className="flex-wrap flex flex-col">
    {alignVariations.map((align) => (
      <Paragraph key={align} align={align}>
        Pararagraph {align}
      </Paragraph>
    ))}
  </div>
);
