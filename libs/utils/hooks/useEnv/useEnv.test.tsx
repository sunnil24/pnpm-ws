// Import necessary modules
import { renderHook, act } from '@testing-library/react-hooks';
import { useEnv } from './useEnv';

// Define the mock data for the environment configurations
const mockEnvConfig = {
  uat: {
    api_url: 'http://uat.xyz.com',
  },
  it: {
    api_url: 'http://it.xyz.com',
  },
  prod: {
    api_url: 'http://xyz.com',
  },
  local: {
    api_url: 'http://localhost:4200',
  },
};

// Define the tests
describe('useEnv', () => {
  it('initializes the environment correctly', () => {
    const { result } = renderHook(() => useEnv());

    act(() => {
      result.current.envInit(mockEnvConfig);
    });

    expect(result.current.getEnv()).toEqual(mockEnvConfig.prod);
  });

  it('returns the correct environment configuration', () => {
    const { result } = renderHook(() => useEnv());

    act(() => {
      result.current.envInit(mockEnvConfig);
    });

    expect(result.current.getEnv()).toEqual(mockEnvConfig.prod);
  });
});
