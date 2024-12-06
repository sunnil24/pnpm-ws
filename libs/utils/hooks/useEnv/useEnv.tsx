type config = {
  rest: string;
  content: string;
};

interface EnvConfig {
  [key: string]: config;
}

const envConfig: EnvConfig = {
  uat: {
    rest: 'http://uat-rest.xyz.com',
    content: 'http://uat-content.xyz.com',
  },
  it: {
    rest: 'http://it-rest.xyz.com/rest',
    content: 'http://it-content.xyz.com/content',
  },
  prod: {
    rest: 'http://rest.xyz.com/rest',
    content: 'http://content.xyz.com/content',
  },
  local: {
    rest: '/mock/rest',
    content: '/mock/content',
  },
  mocked: {
    rest: '/mock/rest',
    content: '/mock/content',
  },
};

let globalEnv: config;

export const useEnv = () => {
  const envInit = (specificConfig?: string) => {
    // If a specific config is provided, use it.
    if (specificConfig) {
      globalEnv = envConfig[specificConfig];
      return;
    }

    // If 'isMocked' is stored in sessionStorage, use the 'mocked' config.
    if (sessionStorage.getItem('isMocked')) {
      globalEnv = envConfig.mocked;
      return;
    }

    // If the hostname includes a key from envConfig, use that config.
    const hostname = window.location.hostname;
    const foundKey = Object.keys(envConfig).find((envKey) =>
      hostname.includes(envKey),
    );
    if (foundKey) {
      globalEnv = envConfig[foundKey];
      return;
    }

    // If none of the above conditions are met, use the 'prod' config.
    globalEnv = envConfig.prod;
  };

  const getEnv = () => {
    return globalEnv;
  };

  return { envInit, getEnv };
};
