import { renderHook } from '@testing-library/react-hooks';
import { useEnvironment } from './useEnvironment';

describe('useEnvironment', () => {
  it('should return the correct environment config based on the hostname', () => {
    // Mock the window.location.hostname value
    Object.defineProperty(window, 'location', {
      value: {
        hostname: 'uat.example.com'
      }
    });

    const envConfig = {
      uat: {
        api_url: 'http://uat.example.com'
      },
      prod: {
        api_url: 'http://example.com'
      }
    };

    const { result } = renderHook(() => useEnvironment(envConfig));

    // The hook should return the UAT config because the hostname includes 'uat'
    expect(result.current).toEqual(envConfig.uat);
  });

  it('should return the production config if the hostname does not match any environment', () => {
    // Mock the window.location.hostname value
    Object.defineProperty(window, 'location', {
      value: {
        hostname: 'unknown.example.com'
      }
    });

    const envConfig = {
      uat: {
        api_url: 'http://uat.example.com'
      },
      prod: {
        api_url: 'http://example.com'
      }
    };

    const { result } = renderHook(() => useEnvironment(envConfig));

    // The hook should return the production config because the hostname does not include 'uat'
    expect(result.current).toEqual(envConfig.prod);
  });
});
