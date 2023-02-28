import React, { createContext, useContext } from 'react';
import { rootStore } from '.';

const RootStoreCtx = createContext(rootStore);
export const RootStoreProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <RootStoreCtx.Provider value={rootStore}>{children}</RootStoreCtx.Provider>
);

export const useStores = () => {
  return useContext(RootStoreCtx);
};
