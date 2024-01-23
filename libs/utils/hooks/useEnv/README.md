# useEnvironment Hook

`useEnvironment` is a custom React hook that allows you to easily manage different environment configurations in your application.

## Installation

To install the `useEnvironment` hook, you can use npm or yarn:

```sh
npm install @your-org/use-environment

or 

yarn add @your-org/use-environment
```
## Usage
Here's a basic example of using the useEnvironment hook:


import { useEnvironment } from '@your-org/use-environment';

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
  const env = useEnvironment(envConfig);

}


In this example, useEnvironment is used to get the correct environment configuration based on the current hostname. The envConfig object is passed as a parameter to the useEnvironment hook.


API
The useEnvironment hook accepts a single parameter: an object that maps environment keys to their respective configurations. Each configuration is an object that maps keys to their respective values.

The hook returns the configuration object for the current environment. If no matching environment key is found in the envConfig object, the hook returns the prod configuration.