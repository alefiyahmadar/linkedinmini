import { useContext } from "react"
import { MediaContext } from "./contextProvider"
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from "react-router";

export const PostCard =(e)=>{

const {userArrayStored , BookMark , setBookmark , BookMarkHandler , userStored , LikeHandler , DeleteHandler} = useContext(MediaContext)

const navigate = useNavigate()
console.log(e.likes.likedBy)



        const getImg = userArrayStored.find((u)=>u.username ===e.username)
      
            
            return(
              <div className="postDiv" key={e.id}>
    
                <span  className="userSp" >
    
    
              <div onClick={()=>navigate(`/user/${e.username}`)} className="circleDv">
              <img src={getImg.profileImg}></img>
            </div>
            
            <p onClick={()=>navigate(`/user/${e.username}`)}>{e.username}</p>
             <img onClick={()=>DeleteHandler(e)} style={{display:e.username === userStored.username  ? "flex" :"none" }} className="deleteBtn" width="20" height="20" src="https://img.icons8.com/material-rounded/30/filled-trash.png" alt="filled-trash"/>
           
            </span>
            
            
                
                <h2>{e.text}</h2>

                <span className="postAddon">
                
              
                <img  onClick={()=>LikeHandler(e)} width="30" height="30" src={e.likes.likedBy.includes(userStored.username)?"https://img.icons8.com/ios-filled/30/FA5252/like--v1.png": "https://img.icons8.com/ios-filled/30/737373/like.png"} alt="like"/>
              

                <img style={{display:userStored.bookMark.find((u)=>u.id === e.id) ? "none" :"inline"}} onClick={()=>BookMarkHandler(e)} width="30" height="30" src="https://img.icons8.com/material-outlined/24/1A1A1A/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>

                <img style={{display:userStored.bookMark.find((u)=>u.id === e.id) ? "inline" :"none"}} onClick={()=>BookMarkHandler(e)}  width="30" height="30" src="https://img.icons8.com/material-sharp/30/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>
                
                </span>
                <h5>{formatDistanceToNow(new Date(e.createdAt))}</h5>

              </div>)
}