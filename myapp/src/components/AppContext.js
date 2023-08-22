// AppContext.js

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('homepage');

  const contextValue = {
    activeComponent,
    setActiveComponent,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
