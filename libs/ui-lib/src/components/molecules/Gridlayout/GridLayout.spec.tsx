// Import necessary modules
import React from 'react';
import { render } from '@testing-library/react';
import { GridLayout } from './GridLayout';

// Define the test
describe('GridLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <GridLayout columns='12'>
        <div>Test Child</div>
      </GridLayout>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(
      <GridLayout columns='12' className="test-class">
        <div>Test Child</div>
      </GridLayout>
    );

    expect(container.firstChild).toHaveClass('test-class');
  });
});
