import { useContext } from "react";
import { MediaContext } from "../contextProvider";

export const HomePg = () => {
  const { GetPost, SetPost  } = useContext(MediaContext);

  console.log(GetPost)
  return (
    <div className="homeCnt">
   
    
      <div>
          
        {GetPost.map((e) => (
          <div className="postDiv" key={e.id}>
            
            <h3>{e.username}</h3>
            <p>{e.text}</p>
            <p>{new Date(e.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
