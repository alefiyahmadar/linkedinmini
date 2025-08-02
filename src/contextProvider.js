import React from "react";

import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Posts } from "./backend/post";
import { Users } from "./backend/users";

export const MediaContext = createContext();

export const ContextProvider = ({ children }) => {
  const [GetPost, SetPost] = useState(Posts);
  const [usersArray, setUsersArray] = useState(Users);
  const [user , setUser] = useState()

  const [defaultUser, setDefaultUser] = useState({
    id:uuid(),
    username:"adarshbalika",
     email: "adarshbalika123@gmail.com",
    password: "123",

  })
  
  const [NewUser , setNewUser ]= useState({
    id:uuid(),
    username:"",
    email:"",
    password:""

  })
  const [currentUser , setCur] = useState("")

  const userStored = JSON.parse(localStorage.getItem("user"))
  const userArrayStored = JSON.parse(localStorage.getItem("usersArray"));


  userStored ? localStorage.setItem("user" ,JSON.stringify(userStored)) : localStorage.setItem("user" , JSON.stringify(defaultUser))
   userArrayStored
    ? localStorage.setItem("usersArray", JSON.stringify(userArrayStored))
    : localStorage.setItem("usersArray", JSON.stringify(usersArray));







  return (
    <MediaContext.Provider value={{ GetPost, SetPost  , usersArray , setUsersArray , NewUser , setNewUser ,defaultUser,setDefaultUser }}>
      {children}
    </MediaContext.Provider>
  );
};
