// SearchBox.stories.tsx

import { Story, Meta } from '@storybook/react';

// Import the SearchBox component and its props
import SearchBox from './index';
import { SearchBoxProps } from './SearchBox';

// Default export for the Storybook
export default {
  title: 'Components/SearchBox',
  component: SearchBox,
} as Meta;

// Define a template for the stories
const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;

// Define the stories
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search',
  onSearch: (query) => console.log(`Searching for "${query}"`),
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  placeholder: 'Search for products...',
  onSearch: (query) => console.log(`Searching for "${query}"`),
};
