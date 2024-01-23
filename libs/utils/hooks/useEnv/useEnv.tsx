interface EnvConfig {
  [key: string]: {
    [key: string]: string;
  };
}

let globalEnv: { [key: string]: string } | null = null;

export const useEnv = () => {

  const envInit = (envConfig: EnvConfig) => {
    const hostname = window.location.hostname;
    const foundKey = Object.keys(envConfig).find((envKey) => hostname.includes(envKey));
    if(sessionStorage.getItem('mockEnabled')){
     return globalEnv = envConfig['mockConfig'];
    }
    if (foundKey) {
      globalEnv = envConfig[foundKey];
    } else {
      globalEnv = envConfig.prod; 
    }
  }

  const getEnv = () => {
    return globalEnv;
  }

  return { envInit, getEnv };
};
