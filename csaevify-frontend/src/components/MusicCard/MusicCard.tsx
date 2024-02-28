import "./MusicCard.css";
import cover from '../../images/vultures.jpeg'
import audio from '../../audios/listening.mp3'
import { FaPlay, FaPause, FaHeart, FaVolumeUp } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { TiArrowLoop } from "react-icons/ti";
import { useState, useRef, useEffect } from 'react';

const MusicCard = () => {
  const MAX = 100;

  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(MAX);
  const [showVolumeControls, setShowVolumeControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const musicref = useRef<HTMLAudioElement | null>(null);

  const toggleVolumeControls = () => {
    setShowVolumeControls(!showVolumeControls);
  };
  

  function toggleAudio(): void {
    if (musicref.current) {
      if (play) {
        musicref.current?.pause();
        setPlay(false);
      } else {
        void musicref.current?.play();
        setPlay(true);
      }
    }
  }

  function toggleLoop(): void {
    if (musicref.current) {
      musicref.current.loop = !loop;
      setLoop(!loop);
    }
  }

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    setCurrentVolume(Number(value));
    if (musicref.current) {
      musicref.current.volume = volume;
    }
  }

  function handleTimeUpdate(): void {
    if (musicref.current) {
      setCurrentTime(musicref.current.currentTime);
    }
  }

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setCurrentTime(Number(value));
    if (musicref.current) {
      musicref.current.currentTime = Number(value);
    }
  }

  useEffect(() => {
    if (musicref.current) {
      musicref.current.addEventListener("timeupdate", handleTimeUpdate);
      musicref.current.addEventListener("loadedmetadata", () => {
        setDuration(musicref.current!.duration);
      });
    }
    return () => {
      if (musicref.current) {
        musicref.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  function formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <>
      <div className="music-card">
        <p className="release">2024 · VULTURES 1</p>
        <img src={cover} alt="cover" className="cover" />
        <p className="title">Burn</p>
        <p className="artist">¥$, Kanye West, Ty Dolla $ign</p>
        <div className="slider">
          <input
            type="range"
            className="slider"
            value={currentTime}
            max={duration || 0}
            onChange={handleSliderChange}
          />
          <p className="counter">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>
        <div className="play" onClick={toggleAudio}>
          {play ? <FaPause size={20} /> : <FaPlay size={20} />}
        </div>
            <div className="volumebar-container">
              <div className="volumebar-q">
                    <div className="vb">
                        {showVolumeControls && (<input type="range" className="volumebar" min={0} max={MAX} onChange={handleVolume}
                         style={{ background: `linear-gradient(90deg, purple 0%, orange ${(currentVolume / MAX) * 100}%, white ${(currentVolume / MAX) * 100}%, white 100%)` }}/>)}
                        <FaVolumeUp size={20} className="volumeicon" onClick={toggleVolumeControls} style={{color: "grey"}} />
                    </div>
                  {showVolumeControls && <p className="currentVolume">{currentVolume}</p>}
              </div>
            </div>
        <div className="buttons-container">
          <div className="buttons">
            <div className="shuffle audio-btn">
              <FaShuffle size={20} color={"#D1E8E2"} />
            </div>
            <div className="loop audio-btn" onClick={toggleLoop}>
              <TiArrowLoop size={30} style={{color: "white", background: loop ? "linear-gradient(90deg, purple, orange)" : "none", borderRadius: 15}} />
            </div>
            <div className="like audio-btn">
              <FaHeart size={20} color={"linear-gradient(90deg, purple, orange)"} />
            </div>
          </div>
        </div>
      </div>
      <audio ref={musicref} src={audio} />
    </>
  );
};

export default MusicCard;
