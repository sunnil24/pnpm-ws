import { describe, expect, test, vi } from 'vitest';
import { CheckboxField, CheckboxProps } from './index';
import '@testing-library/jest-dom/vitest';
import { render, fireEvent } from '@testing-library/react';

describe('CheckboxField', () => {
  test('renders Checkbox with props', () => {
    const props: CheckboxProps = {
      onChange: vi.fn(),
    };

    const { getByRole } = render(<CheckboxField {...props} />);

    // Verify that the Checkbox component is rendered
    const checkboxElement = getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    // Simulate a click event on the checkbox
    fireEvent.click(checkboxElement);

    // Check if the checkbox is checked after click
    expect(checkboxElement).toBeChecked();
  });
});
