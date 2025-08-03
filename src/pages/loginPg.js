import { useContext, useState } from "react"
import { MediaContext } from "../contextProvider"
import { NavLink, useNavigate } from "react-router"

export const LoginPg = ()=>{

    const [getName , setName] = useState()
    const [getPass , setPass] = useState()

    const { isLoggedIn , setIsLoggedIn , defaultUser } =useContext(MediaContext)

    const navigate =useNavigate()

    const loginGuestHandler =()=>{

        localStorage.setItem("user" , JSON.stringify(defaultUser))
        setIsLoggedIn(true)
        navigate("/")
    }

    const LoginHandler =()=>{

        const usersArr = JSON.parse(localStorage.getItem("usersArray"))
        console.log(usersArr)
        const FindUser = usersArr.find((e)=>e.username === getName && e.password === getPass)
        if(FindUser){
            localStorage.setItem("user" , JSON.stringify(FindUser))
            setIsLoggedIn(true)
             
            navigate("/")
            
        }else{

            alert("Incorrect")
        }
    }

    return(<div className="signUpCont">
        <h5>ChaturChat</h5>
      <h4>Login</h4>
        <input placeholder="username" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="password" onChange={(e)=>setPass(e.target.value)} />
        <button onClick={LoginHandler}>Login</button>
        <button onClick={loginGuestHandler}>Login as a guest</button>
        <p>Dont have an account? <NavLink to={"/signup"}>SignUp</NavLink></p>
    </div>)
}