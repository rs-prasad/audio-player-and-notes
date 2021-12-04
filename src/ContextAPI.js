import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const ContextAPI = ({ children }) => {
  const [fileObject, setFileObject] = useState({ message: "empty" });

  return (
    <AppContext.Provider value={{ fileObject, setFileObject }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default ContextAPI;
