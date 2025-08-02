import { useContext } from "react";
import { MediaContext } from "../contextProvider";

export const HomePg = () => {
  const { GetPost, SetPost  } = useContext(MediaContext);

  
  return (
    <div>
      <h3>Home</h3>
    
      <div>
        {GetPost.map((e) => (
          <div className="postDiv" key={e.id}>
            <h3>{e.username}</h3>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
