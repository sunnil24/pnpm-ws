import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};

const SizeTemplate = () => (
  <>
    <div className="p-4">
      Size sm
      <Loader size="sm" />
    </div>

    <div className="p-4">
      Size md
      <Loader size="md" />
    </div>

    <div className="p-4">
      Size lg
      <Loader size="lg" />
    </div>
  </>
);

export const Size = SizeTemplate.bind({});
