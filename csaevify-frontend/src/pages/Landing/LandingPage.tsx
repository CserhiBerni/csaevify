import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import MusicCard from "../../components/CardTest/MusicCard";
import vultures from '../../images/vultures.jpeg'
import institution from '../../images/institution.png'
import gyerekdalok from '../../images/gyerekdalok.png'
import { FaPlay } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <div className="main-section">
          <div className="songs">
            <div className="song">
              <img src={vultures} alt="cover" className="song-cover" />
              <p className="song-title">Burn</p>
              <p>¥$, Kanye West, Ty Dolla $ign</p>
              <div className="song-play">
                <FaPlay className="song-play-icon"/>
              </div>
            </div>
            <div className="song">
              <img src={institution} alt="cover" className="song-cover" />
              <p className="song-title">Already</p>
              <p>Kodak Black</p>
              <div className="song-play">
                <FaPlay className="song-play-icon"/>
              </div>
            </div>
            <div className="song">
              <img src={gyerekdalok} alt="cover" className="song-cover" />
              <p className="song-title">Fej és vállak</p>
              <p>HeyKids Gyerekdalok</p>
              <div className="song-play">
                <FaPlay className="song-play-icon"/>
              </div>
            </div>
          </div>
        </div>
        <MusicCard />
      </div>
    </div>
  );
};

export default LandingPage;
