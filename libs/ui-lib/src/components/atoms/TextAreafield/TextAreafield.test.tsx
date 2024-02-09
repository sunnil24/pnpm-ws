import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { TextAreaField } from './index';

describe('TextAreaField', () => {
  test('should render children', () => {
    render(<TextAreaField>Hello</TextAreaField>);
    const textArea = screen.getByRole('textbox');
    expect(textArea).toHaveTextContent('Hello');
  });

  test('should spread props to TextArea', () => {
    render(<TextAreaField placeholder="Enter text here" />);
    const textArea = screen.getByRole('textbox');
    expect(textArea).toHaveAttribute('placeholder', 'Enter text here');
  });
});
