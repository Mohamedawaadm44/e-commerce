import React, { createContext, useState } from "react";
export const AuthContextObject = createContext(null);
export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <AuthContextObject.Provider value={{ token: token, setToken: setToken }}>
      {children}
    </AuthContextObject.Provider>
  );
}
