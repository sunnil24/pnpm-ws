// GridLayout.stories.tsx

import { Story, Meta } from '@storybook/react';
import { Box } from '@radix-ui/themes';

// Import the GridLayout component and its props
import { GridLayout, GridLayoutProps } from './GridLayout';

// Default export for the Storybook
export default {
  title: 'Components/GridLayout',
  component: GridLayout,
} as Meta;

// Define a template for the stories
const Template: Story<GridLayoutProps> = (args) => <GridLayout {...args} />;

// Define the stories
export const Default = Template.bind({});
Default.args = {
  columns: '12',
  width: 'auto',
  gap: '4',
  children: (
    <>
      <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
        Item 1
      </Box>
      <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
        Item 2
      </Box>
      <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
        Item 3
      </Box>
      <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
        Item 4
      </Box>
    </>
  ),
};
