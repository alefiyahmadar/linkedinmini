import React from "react";

import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Posts } from "./backend/post";
import { Users } from "./backend/users";

export const MediaContext = createContext();

export const ContextProvider = ({ children }) => {
  


  const [GetPost, SetPost] = useState(() => {
    const savedPost = localStorage.getItem("postArray");
    return savedPost ? JSON.parse(savedPost) : Posts;
  });
  const [usersArray, setUsersArray] = useState(Users);
  const [user , setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [defaultUser, setDefaultUser] = useState({
    id:uuid(),
    username:"adarshbalika",
     email: "adarshbalika123@gmail.com",
    password: "123",
    bio:"Finance Manager",
    profileImg:
      "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
       followers: [],
    following: [],
    bookMark: [],
      

  })
  
  const [NewUser , setNewUser ]= useState({
    id:uuid(),
    username:"",
    email:"",
    password:"",
    profileImg:"https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg",
     followers: [],
    following: [],
    bookMark: [],

  })

  const [BookMark , setBookmark] = useState([])

  
  

  const userStored = JSON.parse(localStorage.getItem("user"))
  const userArrayStored = JSON.parse(localStorage.getItem("usersArray"));

  


  userStored ? localStorage.setItem("user" ,JSON.stringify(userStored)) : localStorage.setItem("user" , JSON.stringify(defaultUser))


   userArrayStored
    ? localStorage.setItem("usersArray", JSON.stringify(userArrayStored))
    : localStorage.setItem("usersArray", JSON.stringify(usersArray));

    
const BookMarkHandler = (post) => {
    // setUsersArray((prevUser) =>
    //   prevUser.map((user) => {
    //     if (user.username === userStored.username) {
    //       const isBookmarked = user.bookMark.some(
    //         (bookmark) => bookmark.id === post.id
    //       );
    //       const newBookmarkArray = isBookmarked
    //         ? user.bookMark.filter((bookmark) => bookmark.id !== post.id)
    //         : [...user.bookMark, post];
    //       return { ...user, bookMark: newBookmarkArray };
    //     }
        
    //     return user;
    //   })
    // );

   


  };


    
console.log(usersArray)






  return (
    <MediaContext.Provider value={{ GetPost, SetPost  , usersArray , setUsersArray , NewUser , setNewUser ,defaultUser,setDefaultUser , userStored ,userArrayStored  , isLoggedIn, setIsLoggedIn , BookMark , setBookmark , BookMarkHandler }}>
      {children}
    </MediaContext.Provider>
  );
};
