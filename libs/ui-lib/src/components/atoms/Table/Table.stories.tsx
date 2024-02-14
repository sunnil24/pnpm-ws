import type { Meta, StoryObj, Storyfn } from '@storybook/react';
import { Table, TableProps } from './index';

const meta = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
  },
} as Meta<TableProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Add your story variants here
export const Default: Story = {
  args: {
    domLayout: 'autoHeight',
    rowClass: 'bg-secondary-foreground',
    columnDefs: [
      { field: 'request' },
      { field: 'model' },
      { field: 'assignedto' },
      { field: 'portfoliomanager' },
    ],
    rowData: [
      {
        request: 'Tesla',
        model: 'Model Y',
        assignedto: 64950,
        portfoliomanager: true,
      },
      {
        request: 'Ford',
        model: 'F-Series',
        assignedto: 33850,
        portfoliomanager: false,
      },
      {
        request: 'Toyota',
        model: 'Corolla',
        assignedto: 29600,
        portfoliomanager: false,
      },
    ],
  },
};