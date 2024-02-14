import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Button from './index';

describe('Button', () => {
  test('renders with children', () => {
    render(<Button>Click me!</Button>);
    expect(screen.getByText('Click me!')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me!</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
