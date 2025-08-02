import "./styles.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { HomePg } from "./pages/homePg";
import { SignUp } from "./pages/signup";
import { useContext } from "react";
import { MediaContext } from "./contextProvider";

export default function App() {
  const { GetPost, SetPost } = useContext(MediaContext);

  return (
    <div className="App">
      <nav>
        <NavLink to="/signup">signup</NavLink>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </nav>
    </div>
  );
}
