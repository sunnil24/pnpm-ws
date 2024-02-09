import { render } from '@testing-library/react';
import { HeadingComponent } from './index';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Heading Component', () => {
  test('should render children', () => {
    const { getByText } = render(<HeadingComponent>Test</HeadingComponent>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  test('should render Text component', () => {
    const { getByText } = render(<HeadingComponent>Test</HeadingComponent>);
    expect(getByText('Test').tagName).toBe('SPAN');
  });
});
