import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    grouping: "status",
    ordering: "priority",
  });

  const updateSelectedOptions = (grouping, ordering) => {
    setSelectedOptions({ grouping, ordering });
  };

  return (
    <AppStateContext.Provider
      value={{ selectedOptions, updateSelectedOptions }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
