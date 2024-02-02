import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, vi } from 'vitest';
import useThrottle from './useThrottle';

vi.useFakeTimers();

describe('useThrottle', () => {
  it('should update the throttled value after the specified delay', () => {
    const { rerender, result } = renderHook(
      ({ delay, value }) => useThrottle(value, delay),
      { initialProps: { value: 'initial', delay: 500 } },
    );

    // Initially, the throttled value should be the initial value
    expect(result.current).toBe('initial');

    // Update the value
    rerender({ value: 'updated', delay: 500 });

    // Immediately after updating, the throttled value should still be the initial value
    expect(result.current).toBe('initial');

    // Fast-forward until all timers have been executed
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Now, the throttled value should be the updated value
    expect(result.current).toBe('updated');
  });
});
