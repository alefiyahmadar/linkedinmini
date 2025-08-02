import "./styles.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { HomePg } from "./pages/homePg";
import { SignUp } from "./pages/signup";
import { useContext } from "react";
import { MediaContext } from "./contextProvider";
import { LoginPg } from "./pages/loginPg";

export default function App() {
  const { GetPost, SetPost ,  } = useContext(MediaContext);

  return (
    <div className="App">
      <div className="FixedSide">
        <p>fixed</p>
      </div>
      <nav>
        <NavLink to="/signup">signup</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPg/>}/>
        </Routes>
      </nav>
    </div>
  );
}
