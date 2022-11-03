import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./FIrstRouter.css";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

const FirstRouter = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"} className="item">
          Home
        </Link>
        <Link to={"/about"} className="item">
          About
        </Link>
        <Link to={"/profile"} className="item">
          Profile
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer>(C)opytight 모바일웹</footer>
    </BrowserRouter>
  );
};

export default FirstRouter;
