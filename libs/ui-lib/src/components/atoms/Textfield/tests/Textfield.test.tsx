import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Textfield } from '../Textfield';

describe('TextField', () => {
  test('renders input value', () => {
    render(<Textfield inputProps={{ value: 'test' }} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test');
  });
  test('renders with custom props', () => {
    const rootProps = { className: 'root' };
    const inputProps = { className: 'input' };
    const slotProps = {
      className: 'slot',
      isIconEnabled: true,
      children: <span>Icon</span>,
    };
    const { getByText } = render(
      <Textfield
        rootProps={rootProps}
        inputProps={inputProps}
        slotProps={slotProps}
      />,
    );
    expect(getByText('Icon')).toBeInTheDocument();
  });

  test('does not render icon slot if disabled', () => {
    const { queryByText } = render(
      <Textfield slotProps={{ isIconEnabled: false }} />,
    );
    expect(queryByText('Icon')).not.toBeInTheDocument();
  });
});