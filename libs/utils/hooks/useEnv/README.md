# useEnv Hook

`useEnv` is a custom React hook that allows you to easily manage different environment configurations in your application.

The useEnv hook is a custom React hook that provides an easy way to manage different environment configurations in your application.

The benefits of using this hook are:

Centralized Configuration Management: By using this hook, you can centralize all your environment-specific configurations in one place. This makes it easier to manage and update these configurations as your application grows.

Dynamic Environment Detection: The hook automatically detects the current environment based on the hostname. This means you don't have to manually switch between different configurations when moving from development to production, for example.

Easy Access to Configurations: The getEnv function returned by the hook provides an easy way to access the current environment's configuration anywhere in your application. This can be very useful when you need to use these configurations in multiple components.

Mocking Support: The hook supports a mockConfig that can be used when mockEnabled is set in the session storage. This can be very useful for testing and development purposes.

In summary, the useEnv hook provides a clean and efficient way to manage environment-specific configurations in your React application. By encapsulating this logic in a custom hook, you can keep your components clean and focused on their primary responsibilities.

## Installation

To install the `useEnv` hook, you can use npm or yarn:

```sh
npm install @your-org/use-env

or 

yarn add @your-org/use-env


import { useEnv } from '@your-org/use-env';

const envConfig = {
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

function MyComponent() {
    const { envInit, getEnv } = useEnv();
    envInit(envConfig);
    
    useEffect(() => {
    console.log(getEnv())
    }, [])

}
``````

In this example, useEnv is used to get the correct environment configuration based on the current hostname. The envConfig object is passed as a parameter to the envInit function.


API
The useEnv hook returns an object with two functions:

envInit(envConfig: EnvConfig): Initializes the environment configurations. It accepts an object that maps environment keys to their respective configurations. Each configuration is an object that maps keys to their respective values.

getEnv(): Returns the configuration object for the current environment. If no matching environment key is found in the envConfig object, it returns the prod configuration.


