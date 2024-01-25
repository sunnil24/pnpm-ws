import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from "./Button";
import { describe, test, vi } from 'vitest';

describe('Button', () => {
  test('renders with children', () => {
    render(<Button>Click me!</Button>);
    expect(screen.getByText('Click me!')).toBeDefined();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me!</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

});
