import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { MediaContext } from "../contextProvider"
import { PostCard } from "../postCard"


export const UserPage =()=>{

    const {userArrayStored , GetPost} = useContext(MediaContext)

const {userId} = useParams()
const navigate = useNavigate()



const FindUser = userArrayStored.find((e)=>e.username === userId)

console.log(FindUser)

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

            </div>

        
        
</div>


     
        {
            GetPost.map((e)=>e.username === userId ? (<PostCard {...e}/>) :"")

        }
    </div>)
}