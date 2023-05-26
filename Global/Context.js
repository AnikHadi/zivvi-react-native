import React, { useState } from "react";

const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [DOB, setDOB] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        DOB,
        setDOB,
        phone,
        setPhone,
        userName,
        setUserName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
