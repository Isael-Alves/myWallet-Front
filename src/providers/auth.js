import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [dados, setDados] = useState({}); 

  return <AuthContext.Provider value={{dados, setDados}}>{props.children}</AuthContext.Provider>;
};