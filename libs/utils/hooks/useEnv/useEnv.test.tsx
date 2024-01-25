import { useEnv } from './useEnv';
import { describe, beforeEach, afterEach, test, beforeAll } from 'vitest';

describe('useEnv hook test cases', () => {
   beforeAll(() => {
    global.window = Object.create(window);
Object.defineProperty(window, 'location', {
  value: {
    hostname: 'localhost'
  },
  writable: true
});
   })
  beforeEach(() => {
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  test('should set globalEnv to the specific config if provided', () => {
    const { envInit, getEnv } = useEnv();
    envInit('uat');
    const env = getEnv();
    expect(env).toEqual({
      rest: 'http://uat-rest.xyz.com',
      content: 'http://uat-content.xyz.com',
    });
  });

  test('should set globalEnv to the mocked config if isMocked is stored in sessionStorage', () => {
    sessionStorage.setItem('isMocked', 'true');
    const { envInit, getEnv } = useEnv();
    envInit();
    const env = getEnv();
    expect(env).toEqual({
      rest: '/mock/rest',
      content: '/mock/content',
    });
  });

  test('should set globalEnv to the config that matches the hostname', () => {
    global.window.location.hostname = 'uat.xyz.com';
    const { envInit, getEnv } = useEnv();
    envInit();
    const env = getEnv();
    expect(env).toEqual({
      rest: 'http://uat-rest.xyz.com',
      content: 'http://uat-content.xyz.com',
    });
  });

  test('should set globalEnv to the prod config if no other conditions are met', () => {
    global.window.location.hostname = 'unknown.com';
    const { envInit, getEnv } = useEnv();
    envInit();
    const env = getEnv();
    expect(env).toEqual({
      rest: 'http://rest.xyz.com/rest',
      content: 'http://content.xyz.com/content',
    });
  });
});
