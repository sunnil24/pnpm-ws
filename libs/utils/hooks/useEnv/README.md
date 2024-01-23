# useEnv Hook
useEnv is a custom React hook that allows you to easily manage different environment configurations in your application.

## Why useEnv?
Managing different environments in a web application can be challenging. useEnv simplifies this process by providing a consistent way to handle environment configurations.

By using useEnv, you can:

1.Easily switch between different environments (like 'uat', 'prod', 'local', etc.)

2.Automatically determine the environment based on the hostname

3.Override the automatic environment detection by storing 'isMocked' in sessionStorage

4.Get the current environment configuration from any component in your application

This makes your code cleaner and easier to maintain, and allows you to focus on the core functionality of your application.

## Installation

To install the `useEnv` hook, you can use npm or yarn:

```sh
npm install @your-org/use-env

or 

yarn add @your-org/use-env
```

# Usage 

```jsx
import { useEnv } from '@your-org/use-env';

function MyComponent() {
 const { envInit } = useEnv(); 
 envInit(); // Call without arguments to automatically determine the environment

// You can also specify a particular environment:
 envInit('uat'); // This will set the environment to 'uat'
}

// In any other component, you can get the current environment configuration:
const { getEnv } = useEnv();
const env = getEnv(); // This will return the current environment configuration
```



## Default Configuration
```Js
const envConfig = {
  uat: {
    rest: 'http://uat-rest.xyz.com',
    data: 'http://uat-data.xyz.com',
    content: 'http://uat-content.xyz.com',
  },
  it: {
    rest: 'http://it-rest.xyz.com/rest',
    data: 'http://it-data.xyz.com/data',
    content: 'http://it-content.xyz.com/content',
  },
  prod: {
    rest: 'http://rest.xyz.com/rest',
    data: 'http://data.xyz.com/data',
    content: 'http://content.xyz.com/content',
  },
  local: {
    rest: 'http://localhost:4200/rest',
    data: 'http://uat-data.xyz.com/data',
    content: 'http://uat-content.xyz.com/content',
  },
  mocked: {
    rest: 'http://uat-rest.xyz.com/rest',
    data: 'http://uat-data.xyz.com/data',
    content: 'http://uat-content.xyz.com/content',
  },
};
``````

The hook will automatically determine the environment based on the hostname. If the hostname includes a key from envConfig, it will use that configuration. If 'isMocked' is stored in sessionStorage, it will use the 'mocked' configuration. If none of these conditions are met, it will use the 'prod' configuration.


