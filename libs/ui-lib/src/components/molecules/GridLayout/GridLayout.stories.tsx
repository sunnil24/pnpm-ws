/* eslint-disable import/no-extraneous-dependencies */
import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GridLayout } from './index';
import { Box } from '@radix-ui/themes';

export type GridProps = ComponentProps<typeof GridLayout>;

// Default export for the Storybook
const meta = {
  title: 'Components/GridLayout',
  component: GridLayout,
} satisfies Meta<typeof GridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: '12',
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
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 5
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 6
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 7
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 8
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 9
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 10
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 11
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 12
        </Box>
      </>
    ),
  },
};

export const WithClassName: Story = {
  args: {
    columns: '16',
    className: 'bg-red-50',
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
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 5
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 6
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 7
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 8
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 9
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 10
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 11
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 12
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 13
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 14
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 15
        </Box>
        <Box style={{ border: '1px solid black' }} width="9" height={'9'}>
          Item 16
        </Box>
      </>
    ),
  },
};
