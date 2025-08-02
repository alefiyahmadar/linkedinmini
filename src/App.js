import "./styles.css";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { HomePg } from "./pages/homePg";
import { SignUp } from "./pages/signup";
import { useContext , useState , useEffect} from "react";
import { MediaContext } from "./contextProvider";
import { LoginPg } from "./pages/loginPg";
import { Users } from "./backend/users";
import { UserPage } from "./pages/userPg";
export default function App() {
  const { GetPost, SetPost , userStored ,userArrayStored , newPost , setNewPost } = useContext(MediaContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  console.log(userStored)
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

const AddNewPostBtn =()=>{

  const updatePostArr = [...GetPost , newPost]

  console.log(updatePostArr)

  localStorage.setItem("postArray" , JSON.stringify(updatePostArr))
  SetPost(updatePostArr)
  setIsModalOpen(false)
}


  return (
    <div className="App">
      <div className="FixedSide">
        <span onClick={()=>navigate(`/user/${userStored.username}`)} className="userSp" >


          <div className="circleDv">
          <img src={userStored.profileImg}></img>
        </div>
        <p>{userStored.username}</p>
        </span>
        <button className="add-post-btn" onClick={() => setIsModalOpen(true)}>  + Add Post</button>
         {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Create Your Post</h2>
            <textarea onChange={(e)=>setNewPost({...newPost , text:e.target.value})}/>
            <button className="postBtn" onClick={AddNewPostBtn} >Post</button>
          </div>
        </div>
      )}
        
        <div>
          <p>Suggested users</p>
          {
userArrayStored.map((e)=><span onClick={()=>navigate(`/user/${e.username}`)} style={{display: userStored.username === e.username ? "none" :"flex"}} className="userSp"><div className="circleDv">
          <img src={e.profileImg}></img>
        </div>
        <p>{e.username}</p></span>)
          }
        </div>
        
      
      </div>
      <nav>
        
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPg/>}/>
          <Route path="/user/:userId" element={<UserPage/>}></Route>
        </Routes>
      </nav>
    </div>
  );
}
