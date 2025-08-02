import { useState } from "react"

export const LoginPg = ()=>{

    const [getName , setName] = useState()
    const [getPass , setPass] = useState()

    const LoginHandler =()=>{
        const usersArr = JSON.parse(localStorage.getItem("usersArray"))
        console.log(usersArr)
        const FindUser = usersArr.find((e)=>e.username === getName && e.password === getPass)
        if(FindUser){
            localStorage.setItem("user" , JSON.stringify(FindUser))
            
        }else{

            alert("Incorrect")
        }
    }

    return(<div>
        <p>LoginPg</p>
        <input placeholder="username" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="password" onChange={(e)=>setPass(e.target.value)} />
        <button onClick={LoginHandler}>Login</button>
    </div>)
}