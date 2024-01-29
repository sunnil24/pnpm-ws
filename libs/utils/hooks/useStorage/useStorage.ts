import { useState, useEffect, useCallback } from 'react';

type StorageType = 'localStorage' | 'sessionStorage';

interface StorageHook {
  getItem: (key: string) => any;
  setItem: (key: string, value: any) => void;
  removeItem: (key: string) => void;
}

function useStorage(storageType: StorageType = 'localStorage'): StorageHook {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage;

  const [state, setState] = useState(() => {
    const storedData = Object.keys(storage).reduce((acc: Record<string, any>, key: string) => {
      try {
        acc[key] = JSON.parse(storage.getItem(key) || '');
      } catch (error) {
        console.error(`Error retrieving data from storage (key: ${key}):`, error);
      }
      return acc;
    }, {});
    return storedData;
  });

  const getItem = useCallback(
    (key: string) => {
      console.log(">>>STATE", key, state[key])
      return state[key];
    },
    [state]
  );

  const setItem = useCallback(
    (key: string, value: any) => {
      try {
        storage.setItem(key, JSON.stringify(value));
        setState((prev) => ({ ...prev, [key]: value }));
      } catch (error) {
        console.error(`Error storing data in storage (key: ${key}):`, error);
      }
    },
    [storage]
  );

  const removeItem = useCallback(
    (key: string) => {
      try {
        storage.removeItem(key);
        setState((prev) => {
          const { [key]: removedKey, ...newState } = prev;
          return newState;
        });
      } catch (error) {
        console.error(`Error removing data from storage (key: ${key}):`, error);
      }
    },
    [storage]
  );

  useEffect(() => {
    // Update the state with any changes in storage during the component's lifetime
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === storage) {
        setState((prev) => {
          const key = event.key || '';
          if (event.newValue === null) {
            // Item was removed
            const { [key]: removedKey, ...newState } = prev;
            return newState;
          } else {
            // Item was added or updated
            const newValue = JSON.parse(event.newValue);
            return { ...prev, [key]: newValue };
          }
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [storage]);

  return {
    getItem,
    setItem,
    removeItem,
  };
}

export default useStorage;
