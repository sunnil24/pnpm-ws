import { renderHook, act } from '@testing-library/react-hooks';
import { useEnv } from './useEnv';

describe('useEnv', () => {
  let originalHostname:string;
  beforeEach(() => {
    originalHostname = window.location.hostname;
  });

  afterEach(() => {
    window.location.hostname = originalHostname;
    sessionStorage.clear();
  });

  it('should set globalEnv to the specific config if provided', () => {
    const { result } = renderHook(() => useEnv());
    act(() => {
      result.current.envInit('uat');
    });
    expect(result.current.getEnv()).toEqual({
      rest: 'http://uat-rest.xyz.com',
      content: 'http://uat-content.xyz.com',
    });
  });

  it('should set globalEnv to the mocked config if isMocked is stored in sessionStorage', () => {
    sessionStorage.setItem('isMocked', 'true');
    const { result } = renderHook(() => useEnv());
    act(() => {
      result.current.envInit();
    });
    expect(result.current.getEnv()).toEqual({
      rest: '/mock/rest/',
      content: '/mock/content',
    });
  });

  it('should set globalEnv to the config that matches the hostname', () => {
    window.location.hostname = 'uat.xyz.com';
    const { result } = renderHook(() => useEnv());
    act(() => {
      result.current.envInit();
    });
    expect(result.current.getEnv()).toEqual({
      rest: 'http://uat-rest.xyz.com',
      content: 'http://uat-content.xyz.com',
    });
  });

  it('should set globalEnv to the prod config if no other conditions are met', () => {
    window.location.hostname = 'unknown.com';
    const { result } = renderHook(() => useEnv());
    act(() => {
      result.current.envInit();
    });
    expect(result.current.getEnv()).toEqual({
      rest: 'http://rest.xyz.com/rest',
      content: 'http://content.xyz.com/content',
    });
  });
});
