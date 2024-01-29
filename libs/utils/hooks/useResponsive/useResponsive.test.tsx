import { renderHook, act } from '@testing-library/react-hooks';
import { configResponsive, useResponsive } from './useResponsive';
import { describe, beforeAll, it, expect } from 'vitest'

describe('useResponsive', () => {
  beforeAll(() => {
    // Mock window object
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
  });

  it('should respond to window resize', () => {
    const { result } = renderHook(() => useResponsive());

    // Initially, the window width is 1024, so the 'lg' breakpoint should be active
    expect(result.current.lg).toBe(true);

    act(() => {
      // Change the window width
      window.innerWidth = 500;
      // Trigger the resize event
      window.dispatchEvent(new Event('resize'));
    });

    // Now, the window width is 500, so the 'lg' breakpoint should not be active
    expect(result.current.lg).toBe(false);
  });

  it('should respond to config changes', () => {
    act(() => {
      // Change the responsive config
      configResponsive({ xs: 0, sm: 400, md: 800, lg: 1200, xl: 1600 });
      // Trigger the resize event
      window.dispatchEvent(new Event('resize'));
    });

    const { result } = renderHook(() => useResponsive());

    console.log(">>>>>>> RESULT", result.current, window.innerWidth)
    // Now, the 'sm' breakpoint should be active
    expect(result.current.sm).toBeTruthy();
  });
});
