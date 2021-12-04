import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const ContextAPI = ({ children }) => {
  //hooks
  const [fileObject, setFileObject] = useState({ message: "empty" });

  const [notesArray, setNotesArray] = useState([]);
  //functions
  const convertSecondsToMinutes = (seconds) => {
    let time = Math.round(seconds);
    const min =
      time / 60 < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60);
    const sec = time % 60 < 10 ? "0" + (time % 60) : time % 60;
    return min + ":" + sec;
  };

  return (
    <AppContext.Provider
      value={{
        fileObject,
        notesArray,
        setFileObject,
        setNotesArray,
        convertSecondsToMinutes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default ContextAPI;
