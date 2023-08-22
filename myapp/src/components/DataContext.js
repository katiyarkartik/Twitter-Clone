
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataFromChild, setDataFromChild] = useState('');

  return (
    <DataContext.Provider value={{ dataFromChild, setDataFromChild }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
