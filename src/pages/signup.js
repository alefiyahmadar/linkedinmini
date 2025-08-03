import { useContext  , useEffect , useState} from "react";
import { MediaContext } from "../contextProvider";
import { v4 as uuid } from "uuid";
import { useNavigate , NavLink } from "react-router-dom";

export const SignUp = () => {

  const {NewUser , setNewUser , usersArray , setUsersArray ,  isLoggedIn , setIsLoggedIn } =useContext(MediaContext)

  const navigate =useNavigate()
  

const SignUpHandler =()=>{


    const UpdatedArr = [...usersArray, NewUser];
  localStorage.setItem("usersArray" , JSON.stringify(UpdatedArr))
  localStorage.setItem("user" , JSON.stringify(NewUser))
  
  setUsersArray(UpdatedArr)
  
  setIsLoggedIn(true)

navigate("/")
  
}


useEffect(() => {
    const storedUsers = localStorage.getItem("usersArray");
    if (storedUsers) {
      setUsersArray(JSON.parse(storedUsers));
    }
  }, [setUsersArray]);


  console.log(NewUser)
  return (
    <div>
      <p>Signup</p>

      <div>
        <input placeholder="username" onChange={(e)=>setNewUser({...NewUser , username:e.target.value})} />
        <input placeholder="email" onChange={(e)=>setNewUser({...NewUser , email:e.target.value})} />
        <input placeholder="password" onChange={(e)=>setNewUser({...NewUser , password:e.target.value})} />
        <button onClick={SignUpHandler}>Signup</button>
         <p>Already have an account? <NavLink to={"/login"}>Login</NavLink></p>
      </div>
    </div>
  );
};
