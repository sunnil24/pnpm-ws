import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const options = [
  { id: '1', textValue: 'Option 1', value: 'option1' },
  { id: '2', textValue: 'Option 2', value: 'option2' },
  { id: '3', textValue: 'Option 3', value: 'option3', disabled: true },
];

describe('Dropdown', () => {
  it('should render the trigger button with default value', () => {
    render(<Dropdown defaultValue="option1" options={options} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1');
  });

  it('should close the dropdown content when an option is selected', () => {
    render(<Dropdown defaultValue="option1" options={options} />);
    const triggerButton = screen.getByRole('combobox');
    fireEvent.click(triggerButton);
    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should disable the disabled option', () => {
    render(<Dropdown defaultValue="option1" options={options} />);
    const triggerButton = screen.getByRole('combobox');
    fireEvent.click(triggerButton);
    const disabledOption = screen.getByText('Option 3');
    expect(disabledOption).toBeDisabled();
  });
});
