import React from "react";

import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Posts } from "./backend/post";
import { Users } from "./backend/users";
import { tr } from "date-fns/locale";

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
  const [isBookMark , setIsBookmark] = useState(false)

  
  

  const userStored = JSON.parse(localStorage.getItem("user"))
  const userArrayStored = JSON.parse(localStorage.getItem("usersArray"));

  


  userStored ? localStorage.setItem("user" ,JSON.stringify(userStored)) : localStorage.setItem("user" , JSON.stringify(defaultUser))


   userArrayStored
    ? localStorage.setItem("usersArray", JSON.stringify(userArrayStored))
    : localStorage.setItem("usersArray", JSON.stringify(usersArray));

    
const BookMarkHandler = (post) => {

     
 setBookmark((prevBookMark)=>{
  const isBookMarked = prevBookMark.some((e)=>e.id === post.id)

   let updatedBookmarks;

  if(isBookMarked){
   updatedBookmarks =  prevBookMark.filter((e)=>e.id !== post.id)
    
  }else{


   updatedBookmarks =  [...prevBookMark , post]
  }
  const updatedUser = {...userStored, bookMark:updatedBookmarks}
  const UpdateUsersArr =  userArrayStored.map((e)=>e.username === userStored.username ? {...e, bookMark:updatedBookmarks} : e)
   localStorage.setItem("user", JSON.stringify(updatedUser));
   localStorage.setItem("usersArray", JSON.stringify(UpdateUsersArr));


   return updatedBookmarks

 })


  };
console.log(usersArray)
 console.log(BookMark)


    
console.log(userStored)






  return (
    <MediaContext.Provider value={{ GetPost, SetPost  , usersArray , setUsersArray , NewUser , setNewUser ,defaultUser,setDefaultUser , userStored ,userArrayStored  , isLoggedIn, setIsLoggedIn , BookMark , setBookmark , BookMarkHandler , isBookMark , setIsBookmark }}>
      {children}
    </MediaContext.Provider>
  );
};
