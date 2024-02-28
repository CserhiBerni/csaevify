import "./Navbar.css";
import csaevify from '../../images/csaevifywhite.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-first">
        <img className="csaevifyicon" src={csaevify} alt="cseavifyicon"/>
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
