// Import necessary modules
import { render } from '@testing-library/react';
import { GridLayout } from './index';
import { describe, test, expect } from 'vitest';
// Define the test
describe('GridLayout', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <GridLayout columns="12">
        <div>Test Child</div>
      </GridLayout>,
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
