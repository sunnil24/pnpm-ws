import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Loader } from './index';

describe('<Loader />', () => {
  render(<Loader />);

  test('should render the loader correctly', () => {
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toHaveTextContent('Loading...');
  });
});
