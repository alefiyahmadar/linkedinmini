import "./styles.css";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { HomePg } from "./pages/homePg";
import { SignUp } from "./pages/signup";
import { useContext , useState , useEffect} from "react";
import { MediaContext } from "./contextProvider";
import { LoginPg } from "./pages/loginPg";
import { Users } from "./backend/users";
import { UserPage } from "./pages/userPg";
export default function App() {
  const { GetPost, SetPost , userStored ,userArrayStored   ,  isLoggedIn , setIsLoggedIn} = useContext(MediaContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getText , setText] = useState("")
  const navigate = useNavigate()

  console.log(userStored)
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

const AddNewPostBtn =()=>{

  const user = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };

  const newPost = {
    id: uuid(),
    username: user.username,
    createdAt: new Date().toISOString(),
    text:getText,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
  };

  const updatePostArr = [...GetPost , newPost]
console.log(newPost)
console.log(userStored)
   
  console.log(updatePostArr)

  localStorage.setItem("postArray" , JSON.stringify(updatePostArr))
  SetPost(updatePostArr)
  setIsModalOpen(false)
}
const LogOutHandler =()=>{

    localStorage.removeItem("user")
    window.location.reload()

}


  return (
    <div className="App">
      <div className="FixedSide" style={{display: isLoggedIn ? "flex" :"none" }}>
        <span onClick={()=>navigate(`/user/${userStored.username}`)} className="userSp" style={{display:window.innerWidth > 450 ? "block" :"none"}}  >


          <div className="circleDv">
          <img src={userStored.profileImg}></img>
        </div>
        <p>{userStored.username}</p>
        </span>
        
         {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Create Your Post</h2>
            <textarea onChange={(e)=>setText(e.target.value)}/>
            <button className="postBtn" onClick={AddNewPostBtn} >Post</button>
          </div>
        </div>
      )}
        
        <div style={{display:window.innerWidth > 450 ? "block" :"none"}}>
          <p>Suggested users</p>
          {
userArrayStored.map((e)=><span onClick={()=>navigate(`/user/${e.username}`)} style={{display: userStored.username === e.username  ? "none" :"flex"}} className="userSp"><div className="circleDv">
          <img src={e.profileImg}></img>
        </div>
        <p>{e.username}</p></span>)
          }
        </div>
        
      
      </div>
      <div className="leftBar" style={{display: isLoggedIn ? "block" :"none" }}>
        <h2>ChaturChat</h2>
        <h4>All the chaturs chat here</h4>

        <span>
          <NavLink to={"/"}>
            <img width="30" height="30" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
          <label>home</label>

          </NavLink>

          

          <NavLink onClick={() => setIsModalOpen(true)}>

             <img width="30" height="30" src="https://img.icons8.com/ios/30/plus--v1.png" alt="plus--v1"/>
          <label>Create</label>
          </NavLink>
<NavLink onClick={LogOutHandler}>

          <img width="30" height="30" src="https://img.icons8.com/ios/30/exit.png" alt="exit"/>
          <label>Logout</label>

</NavLink>
         

          
        </span>
      </div>
      <nav className="nav">
        
        <Routes>
          <Route path="/" element={ isLoggedIn ?  <HomePg /> :<LoginPg/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={  <LoginPg/>}/>
          <Route path="/user/:userId" element={ isLoggedIn ? <UserPage/> : <LoginPg/>}></Route>
        </Routes>
      </nav>
    </div>
  );
}
