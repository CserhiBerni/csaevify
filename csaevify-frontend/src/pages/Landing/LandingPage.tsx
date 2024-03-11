import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import MusicCard from "../../components/CardTest/MusicCard";
import vultures from "../../images/vultures.jpeg";
import institution from "../../images/institution.png";
import gyerekdalok from "../../images/gyerekdalok.png";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const LandingPage = () => {
  const [currentMusic, setCurrentMusic] = useState({
    release: "Vultures - 2024",
    cover: "vultures",
    title: "Burn",
    artist: "¥$, Kanye West, Ty Dolla $ign",
    audio: "burn",
  });

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
                <FaPlay
                  className="song-play-icon"
                  onClick={() => {
                    setCurrentMusic({
                      release: "Vultures - 2024",
                      cover: "vultures",
                      title: "Burn",
                      artist: "¥$, Kanye West, Ty Dolla $ign",
                      audio: "burn",
                    });
                  }}
                />
              </div>
            </div>
            <div className="song">
              <img src={institution} alt="cover" className="song-cover" />
              <p className="song-title">Already</p>
              <p>Kodak Black</p>
              <div className="song-play">
                <FaPlay
                  className="song-play-icon"
                  onClick={() => {
                    setCurrentMusic({
                      release: "Institution - 2015",
                      cover: "institution",
                      title: "Already",
                      artist: "Kodak Black",
                      audio: "already",
                    });
                  }}
                />
              </div>
            </div>
            <div className="song">
              <img src={gyerekdalok} alt="cover" className="song-cover" />
              <p className="song-title">Fej és vállak</p>
              <p>HeyKids Gyerekdalok</p>
              <div className="song-play">
                <FaPlay
                  className="song-play-icon"
                  onClick={() => {
                    setCurrentMusic({
                      release: "Gyerekdalok - 2017",
                      cover: "gyerekdalok",
                      title: "Fej és Vállak",
                      artist: "HeyKids Gyerekdalok",
                      audio: "fejesvallak",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <MusicCard
          release={currentMusic.release}
          artist={currentMusic.artist}
          cover={currentMusic.cover}
          title={currentMusic.title}
          audio={currentMusic.audio}
        />
      </div>
    </div>
  );
};

export default LandingPage;
