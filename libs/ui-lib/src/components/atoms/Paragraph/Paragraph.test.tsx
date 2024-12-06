import { render } from '@testing-library/react';
import Paragraph from './index';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Paragraph', () => {
  test('should render children', () => {
    const { getByText } = render(<Paragraph>Test</Paragraph>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  test('should render Text component', () => {
    const { getByText } = render(<Paragraph>Test</Paragraph>);
    expect(getByText('Test').tagName).toBe('SPAN');
  });
});
