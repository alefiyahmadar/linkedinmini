import React from "react";

import { createContext, useEffect, useState } from "react";
import { Posts } from "./backend/post";
import { Users } from "./backend/users";

export const MediaContext = createContext();

export const ContextProvider = ({ children }) => {
  const [GetPost, SetPost] = useState(Posts);
  const [usersArray, setUsersArray] = useState(Users);
  return (
    <MediaContext.Provider value={{ GetPost, SetPost }}>
      {children}
    </MediaContext.Provider>
  );
};
