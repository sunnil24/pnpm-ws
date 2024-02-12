import { describe, expect, test } from 'vitest';
import { RadioGroupRoot, RadioGroupItem } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

describe('RadioGroup', () => {
  test('renders RadioGroupRoot with RadioGroupItem components', () => {
    render(
      <RadioGroupRoot>
        <RadioGroupItem value="option1" />
        <span>Option1</span>
        <RadioGroupItem value="option2" />
        Option 2
        <RadioGroupItem value="option3" />
        Option 3
      </RadioGroupRoot>,
    );

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });
});
