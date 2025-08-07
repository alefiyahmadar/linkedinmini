import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { MediaContext } from "../contextProvider"
import { PostCard } from "../postCard"


export const UserPage =()=>{

    const {userArrayStored , GetPost , userStored , isBookMark , setIsBookmark , FollowHandler} = useContext(MediaContext)

const {userId} = useParams()
const navigate = useNavigate()

const [newBio , setNewBio] = useState("")
const [isBioOpen , setBioOpen] = useState(false)



const FindUser = userArrayStored.find((e)=>e.username === userId)

console.log(FindUser)

const EditBioHandler =()=>{
    setBioOpen(false)
alert("Site In Progress")


}

    return(<div >
      <div style={{borderBottom:FindUser.username === userStored.username ? "none" :"1px solid #F5F5F5" , marginBottom:"1rem"}}>

        <div className="bio" > 
            <div className="bioImg"> <span onClick={()=>navigate(`/user/${FindUser.username}`)} className="userSp" >
    
    
              <div className="circleDvBio">
              <img src={FindUser.profileImg}></img>
            </div>
            
            </span>
             </div>
            <div className="bioInfo">

                <h2>{FindUser.username}</h2>
            <h3>{FindUser.bio}</h3>
            
            <button style={{display:FindUser.username === userStored.username ? "flex" :"none"}} onClick={()=>setBioOpen(true)}>Edit Bio</button>
        { 
         
         isBioOpen && (
            <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setBioOpen(false)}>
              &times;
            </button>
            <h2>Write Your New Bio</h2>
            <textarea onChange={(e)=>setNewBio(e.target.value)}/>
            <button className="postBtn" onClick={EditBioHandler} >Edit</button>
          </div>
        </div>
         )
}

            </div>
            

        
        
</div>
<button className="followBtn" onClick={()=>FollowHandler(FindUser)} style={{display:FindUser.username === userStored.username ? "none" :"flex"}}>{userStored.followers.find((u)=>u.username === FindUser.username) ? "Unfollow" :"Follow"}</button>
</div>

<div style={{display:FindUser.username === userStored.username ? "flex" :"none"}} className="userPostToggle" >
              <div onClick={()=>setIsBookmark(false)} className="post" style={{borderTop:isBookMark ? "none" :"1px solid black"}}>
                <p>post</p>
              </div>
              <div onClick={()=>setIsBookmark(true)} className="saved" style={{borderTop:isBookMark ? "1px solid black" :"none"}}>
                <p>saved</p>
              </div>
            </div>


     
        {
          isBookMark ? userStored.bookMark.map((e)=>< PostCard {...e} />) :  GetPost.map((e)=>e.username === userId ? (<PostCard {...e}/>) :"")

        }
    </div>)
}