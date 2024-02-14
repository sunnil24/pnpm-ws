import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SearchBox from './index';

describe('SearchBox', () => {
  test('should render a search input box and a search button', () => {
    const { getByPlaceholderText, getByRole } = render(<SearchBox />);
    const input = getByPlaceholderText('Search');
    const button = getByRole('button');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should call onSearch function with search query when the search button is clicked', () => {
    const mockOnSearch = vi.fn();
    const { getByRole } = render(<SearchBox onSearch={mockOnSearch} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('');
  });

  test('should update search query state when text is entered into the search input box', () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Test search query' } });
    expect(input).toHaveValue('Test search query');
  });
});
