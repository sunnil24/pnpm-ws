import { renderHook, act } from '@testing-library/react-hooks';
import useStorage from './useStorage';
import { describe, beforeEach, it, expect, vi } from 'vitest';

describe('useStorage', () => {
  let storageMock: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

  beforeEach(() => {
    storageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    };

    global.localStorage = storageMock as Storage;
    global.sessionStorage = storageMock as Storage;
  });

  it('should get an item from storage', () => {
    const { result } = renderHook(() => useStorage('localStorage'));
    let res;

    act(() => {
      res = result.current.getItem('test');
    });

    expect(res).toBe(undefined);
  });

  it('should set an item in storage', () => {
    const { result } = renderHook(() => useStorage('localStorage'));

    act(() => {
      result.current.setItem('test', 'value');
    });

    expect(storageMock.setItem).toHaveBeenCalledWith('test', JSON.stringify('value'));
  });

  it('should remove an item from storage', () => {
    const { result } = renderHook(() => useStorage('localStorage'));

    act(() => {
      result.current.removeItem('test');
    });

    expect(storageMock.removeItem).toHaveBeenCalledWith('test');
  });
});
