import "./Navbar.css";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  return (
    <>
      {isMobile ? (
        <div className="navbar-mobile">
          <h1>Csaevify</h1>
          <div className="mobile-links">
            <Link to={"/discover"} className="mobile-link">
              Discover
            </Link>
            <Link to={"/playlist"} className="mobile-link">
              Playlist
            </Link>
            <Link to={"/contact"} className="mobile-link">
              Contact Us
            </Link>
          </div>
          <div className="mobile-icon"></div>
        </div>
      ) : (
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
          <div className="navbar-third">
            <button>Sign in</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
