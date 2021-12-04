import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const ContextAPI = ({ children }) => {
  //hooks
  const [fileObject, setFileObject] = useState({ message: "empty" });
  //dummy values
  const [notesArray, setNotesArray] = useState([
    {
      timestamp: "00:00",
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, possimus obcaecati. Porro aliquam architecto, magni debitis provident sapiente ratione praesentium et. Officia corporis fugiat aliquid qui consequatur, reprehenderit repellendus id exercitationem! Soluta sunt nostrum pariatur reprehenderit, nulla ut nam adipisci tenetur quod? Necessitatibus optio temporibus, deserunt sed alias omnis nisi non reiciendis facilis animi nostrum soluta dolorum quaerat nobis consequuntur ipsa tempore? Nam minima molestiae, itaque quod quasi reprehenderit, recusandae exercitationem nesciunt maiores mollitia voluptates commodi minus dignissimos et eos doloremque! Alias aut nesciunt repellendus necessitatibus! Neque, perspiciatis necessitatibus unde ullam sit veritatis at minus nulla tempore adipisci enim maiores!",
    },
    { timestamp: "01:00", note: "hello Jhon" },
    {
      timestamp: "02:00",
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, possimus obcaecati. Porro aliquam architecto, magni debitis provident sapiente ratione praesentium et. Officia corporis fugiat aliquid qui consequatur, reprehenderit repellendus id exercitationem! Soluta sunt nostrum pariatur reprehenderit, nulla ut nam adipisci tenetur quod? Necessitatibus optio temporibus, deserunt sed alias omnis nisi non reiciendis facilis animi nostrum soluta dolorum quaerat nobis consequuntur ipsa tempore? Nam minima molestiae, itaque quod quasi reprehenderit, recusandae exercitationem nesciunt maiores mollitia voluptates commodi minus dignissimos et eos doloremque! Alias aut nesciunt repellendus necessitatibus! Neque, perspiciatis necessitatibus unde ullam sit veritatis at minus nulla tempore adipisci enim maiores!",
    },
    {
      timestamp: "02:10",
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, possimus obcaecati. Porro aliquam architecto, magni debitis provident sapiente ratione praesentium et. Officia corporis fugiat aliquid qui consequatur, reprehenderit repellendus id exercitationem! Soluta sunt nostrum pariatur reprehenderit, nulla ut nam adipisci tenetur quod? Necessitatibus optio temporibus, deserunt sed alias omnis nisi non reiciendis facilis animi nostrum soluta dolorum quaerat nobis consequuntur ipsa tempore? Nam minima molestiae, itaque quod quasi reprehenderit, recusandae exercitationem nesciunt maiores mollitia voluptates commodi minus dignissimos et eos doloremque! Alias aut nesciunt repellendus necessitatibus! Neque, perspiciatis necessitatibus unde ullam sit veritatis at minus nulla tempore adipisci enim maiores!",
    },
    {
      timestamp: "00:30",
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, possimus obcaecati. Porro aliquam architecto, magni debitis provident sapiente ratione praesentium et. Officia corporis fugiat aliquid qui consequatur, reprehenderit repellendus id exercitationem! Soluta sunt nostrum pariatur reprehenderit, nulla ut nam adipisci tenetur quod? Necessitatibus optio temporibus, deserunt sed alias omnis nisi non reiciendis facilis animi nostrum soluta dolorum quaerat nobis consequuntur ipsa tempore? Nam minima molestiae, itaque quod quasi reprehenderit, recusandae exercitationem nesciunt maiores mollitia voluptates commodi minus dignissimos et eos doloremque! Alias aut nesciunt repellendus necessitatibus! Neque, perspiciatis necessitatibus unde ullam sit veritatis at minus nulla tempore adipisci enim maiores!",
    },
    { timestamp: "0:00", note: "hello Jhon" },
  ]);
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
