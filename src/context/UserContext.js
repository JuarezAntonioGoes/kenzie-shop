import React from "react";

const UsrContext = React.createContext();

const UserContext = ({ children, token, handleFetch }) => {
  return (
    <UsrContext.Provider value={{ token, handleFetch }}>
      {children}
    </UsrContext.Provider>
  );
};

export { UserContext, UsrContext };
