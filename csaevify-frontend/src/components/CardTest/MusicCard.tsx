import "./MusicCard.css";
import vultures from "../../images/vultures.jpeg";
import institution from "../../images/institution.png";
import gyerekdalok from "../../images/gyerekdalok.png";
import burn from "../../audios/burn.mp3";
import already from '../../audios/already.mp3';
import fejesvallak from '../../audios/fejesvallak.mp3';

import { FaPlay, FaPause, FaHeart, FaVolumeUp } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { TiArrowLoop } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";

interface Song {
  release: string;
  cover: string;
  title: string;
  artist: string;
  audio: string;
}

const MusicCard = (props: Song) => {
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
      <div className="music-card-container">
        <div className="music-card">
          <p className="release">{props.release}</p>
          <img
            src={
              props.cover == "institution"
                ? institution
                : props.cover == "vultures"
                ? vultures
                : gyerekdalok
            }
            alt="cover"
            className="cover"
          />
          <p className="title">{props.title}</p>
          <p className="artist">{props.artist}</p>
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
                {showVolumeControls && (
                  <input
                    type="range"
                    className="volumebar"
                    min={0}
                    max={MAX}
                    onChange={handleVolume}
                    style={{
                      background: `linear-gradient(90deg, purple 0%, orange ${
                        (currentVolume / MAX) * 100
                      }%, white ${(currentVolume / MAX) * 100}%, white 100%)`,
                    }}
                  />
                )}
                <FaVolumeUp
                  size={20}
                  className="volumeicon"
                  onClick={toggleVolumeControls}
                  style={{ color: "grey" }}
                />
              </div>
              {showVolumeControls && (
                <p className="currentVolume">{currentVolume}</p>
              )}
            </div>
          </div>
          <div className="buttons">
            <div className="shuffle audio-btn">
              <FaShuffle size={20} color={"#D1E8E2"} />
            </div>
            <div className="loop audio-btn" onClick={toggleLoop}>
              <TiArrowLoop
                size={30}
                style={{
                  color: "white",
                  background: loop
                    ? "linear-gradient(90deg, purple, orange)"
                    : "none",
                  borderRadius: 15,
                }}
              />
            </div>
            <div className="like audio-btn">
              <svg width="20" height="20">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#800080" />
                    <stop offset="100%" stopColor="#FFA500" />
                  </linearGradient>
                </defs>
                <FaHeart size={20} fill="url(#gradient)" />
              </svg>
            </div>
          </div>
        </div>
        <audio ref={musicref} src={props.audio == "already" ? already : props.audio == "burn" ? burn : fejesvallak} />
      </div>
    </>
  );
};

export default MusicCard;
