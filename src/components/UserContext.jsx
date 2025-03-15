// UserContext.jsx
import React, { createContext, useState } from "react";

// Named export
export const UserContext = createContext();

// Named export
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
