import "./Navbar.css";
import csaevify from "../../images/csaevifywhite.svg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
    <div className="navbar">
      <div className="navbar-first">
        <img
          className="csaevifyicon"
          src={csaevify}
          alt="cseavifyicon"
          onClick={() => {navigate("/")}}
        />
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
      <div className="navbar-third">
        <div className="search-bar">
          <FaSearch className="search-icon" fill={"white"} />
          <input type="text" name="search" id="search" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
