import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-first">
        <h1>Csaevify</h1>
      </div>
      <div className="navbar-second">
        <Link to={"/discover"} className="link">
          Discover
        </Link>
        <Link to={"/playlist"} className="link">
          Playlist
        </Link>
        <Link to={"/contact"} className="link">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
