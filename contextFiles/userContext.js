import React, { createContext, useState } from 'react';
export const UserContext = createContext();

export function UserProvider(props) {

  const[User, setUser] = useState([]);

  return (
    <UserContext.Provider value={[User, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};