import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { MediaContext } from "../contextProvider"
import { PostCard } from "../postCard"


export const UserPage =()=>{

    const {userArrayStored , GetPost , userStored} = useContext(MediaContext)

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

        <div className="bio"> 
            <div className="bioImg"> <span onClick={()=>navigate(`/user/${FindUser.username}`)} className="userSp" >
    
    
              <div className="circleDvBio">
              <img src={FindUser.profileImg}></img>
            </div>
            
            </span>
             </div>
            <div className="bioInfo">

                <h2>{FindUser.username}</h2>
            <h3>{FindUser.bio}</h3>
            <button onClick={()=>setBioOpen(true)}>Edit Bio</button>
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


     
        {
            GetPost.map((e)=>e.username === userId ? (<PostCard {...e}/>) :"")

        }
    </div>)
}