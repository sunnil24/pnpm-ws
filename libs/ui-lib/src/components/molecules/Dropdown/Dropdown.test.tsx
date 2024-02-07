// Dropdown.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { describe, test, expect } from 'vitest';

describe('Dropdown', () => {
  const options = [
    { id: '1', value: 'option1', textValue: 'Option 1' },
    { id: '2', value: 'option2', textValue: 'Option 2' },
    { id: '3', value: 'option3', textValue: 'Option 3' },
  ];

  test('renders correctly and displays options', () => {
    render(<Dropdown defaultValue="option1" options={options} />);

    // Verify that the dropdown trigger button is rendered
    const triggerButton = screen.getByText('Option 1');
    expect(triggerButton).toBeInTheDocument();

    const optionElement = screen.getByText(options[0].textValue);
    expect(optionElement).toBeInTheDocument();
  });

  test('allows selecting an option', async () => {
    render(<Dropdown defaultValue="option1" options={options} />);

    // Open the dropdown menu
    const triggerButton = screen.getByRole('combobox');
    fireEvent.click(triggerButton);

    // Select an option
    const optionToSelect = screen.getByText('Option 1');
    fireEvent.click(optionToSelect);

    // Verify that the selected option is now displayed in the trigger button
    expect(triggerButton).toHaveTextContent('Option 1');
  });
});