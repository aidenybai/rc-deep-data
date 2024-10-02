import React from 'react';

export const StoreContext = React.createContext();

export const useStore = (fields) => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  const state = React.useSyncExternalStore(
    (callback) => store.subscribe(callback, fields),
    store.getState,
    store.getState
  );

  return {
    data: state,
    setStoreState: store.setState,
    clearAll: store.clearAll,
  };
};

export const createStore = (initialState) => {
  let currentState = initialState;
  const listeners = new Set();

  const getState = () => currentState;

  const setState = (update) => {
    currentState = typeof update === 'function' ? update(currentState) : update;
    listeners.forEach((listener) => listener());
  };

  const clearAll = () => {
    setState(initialState);
  };

  const subscribe = (callback) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  };

  return {
    getState,
    setState,
    clearAll,
    subscribe,
  };
};
