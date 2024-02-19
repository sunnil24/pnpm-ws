import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Card } from './index';

describe('Card', () => {
  render(
    <Card>
      <div data-testid="card-child">Child content</div>
    </Card>,
  );

  test('should render Card component correctly', () => {
    expect(screen.getByTestId('card-child')).toHaveTextContent('Child content');
  });
});
