# useStorage Hook

## Description
`useStorage` is a custom React hook that provides an easy-to-use API for interacting with `localStorage` or `sessionStorage`.

## Why useStorage?
In many web applications, it's common to store some data in the browser's storage. This could be anything from user preferences, session data, or any other data that needs to persist across browser sessions or tabs. The `useStorage` hook provides a convenient way to get, set, and remove items from the storage, with all the changes being reflected in the component's state.

## Installation
```sh
npm install @your-org/storage-hook

or 

yarn add @your-org/storage-hook
```

## Usage
```javascript
  
import useStorage from '@your-org/storage-hook';

function Component() {
  const storage = useStorage('localStorage');

  useEffect(() => {
    storage.setItem('key', 'value');
    console.log(storage.getItem('key')); // 'value'
    storage.removeItem('key');
    console.log(storage.getItem('key')); // undefined
  }, []);

  return null;
}
// In this example, the Component component uses the useStorage hook to interact with localStorage.
// It sets an item, logs the item, removes the item, and then logs the item again (which is now undefined).
```

## API
The useStorage hook returns an object with the following methods:

* getItem(key: string): Returns the value associated with the given key. If the key does not exist, returns undefined.
* setItem(key: string, value: any): Sets the value for the given key. The value is automatically serialized to a JSON string before being stored.
* removeItem(key: string): Removes the item associated with the given key.