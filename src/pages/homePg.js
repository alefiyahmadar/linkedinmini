import { useContext } from "react";
import { MediaContext } from "../contextProvider";

import { useNavigate } from "react-router-dom";
import { PostCard } from "../postCard";


export const HomePg = () => {
  const { GetPost, SetPost  ,userStored , userArrayStored } = useContext(MediaContext);
  const navigate = useNavigate()

  console.log(GetPost)
  return (
    <div className="homeCnt">
   
    
      <div>
          
      {GetPost.map((e) => (<PostCard {...e}/>)
        
)}
      </div>
    </div>
  );
};
