import { useEffect, useState } from 'react';

interface EnvConfig {
  [key: string]: {
    [key: string]: string;
  };
}

export const useEnvironment = (envConfig: EnvConfig) => {
  const [env, setEnv] = useState<null | { [key: string]: string }>(null);

  useEffect(() => {
    if(Object.keys(envConfig).length){
    const hostname = window.location.hostname;
    const foundKey = Object.keys(envConfig).find((envKey) => hostname.includes(envKey));
    if (foundKey) {
      setEnv(envConfig[foundKey]);
    } else {
      setEnv(envConfig.prod); 
    }
}
  }, [envConfig]);

  return env;
};
