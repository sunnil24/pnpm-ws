import { describe, it, expect, vi } from 'vitest';
import useDebounce from './useDebounce';
import { renderHook, act } from '@testing-library/react-hooks';

vi.useFakeTimers();

describe('useDebounce', () => {
  it('should update the debounced value after the specified delay', () => {
    const { rerender, result } = renderHook(
      ({ delay, value }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } },
    );

    // Initially, the debounced value should be the initial value
    expect(result.current).toBe('initial');

    // Update the value
    rerender({ value: 'updated', delay: 500 });

    // Immediately after updating, the debounced value should still be the initial value
    expect(result.current).toBe('initial');

    // Fast-forward until all timers have been executed
    act(() => {
      vi.runAllTimers();
    });

    // Now, the debounced value should be the updated value
    expect(result.current).toBe('updated');
  });
});
