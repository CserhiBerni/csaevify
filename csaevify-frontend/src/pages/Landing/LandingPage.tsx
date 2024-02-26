import './LandingPage.css'
import Navbar from '../../Navbar';
import cover from '../../images/kaka.jpeg'
import audio from '../../audios/listening.mp3'
import { FaPlay, FaPause, FaHeart, FaVolumeUp } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { TiArrowLoop } from "react-icons/ti";
import { useState, useRef, useEffect } from 'react';

const MAX = 100;

const LandingPage = () => {
    const [play, setPlay] = useState(false)
    const [loop, setLoop] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(MAX);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const kakaRef = useRef<HTMLAudioElement | null>(null);
 
    function toggleAudio(): void {
        if (kakaRef.current) {
            if(play) {
                kakaRef.current?.pause();
                setPlay(false);
            }
            else {
                void kakaRef.current?.play();
                setPlay(true);
            }
        }
    }

    function toggleLoop(): void {
        if (kakaRef.current) {
            kakaRef.current.loop = !loop; 
            setLoop(!loop);
        }
    }

    function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        setCurrentVolume(Number(value));
        if (kakaRef.current) 
        { 
            kakaRef.current.volume = volume;
        }
    }

    function handleTimeUpdate(): void {
        if (kakaRef.current) {
            setCurrentTime(kakaRef.current.currentTime);
        }
    }

    function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        setCurrentTime(Number(value));
        if (kakaRef.current) {
            kakaRef.current.currentTime = Number(value);
        }
    }

    useEffect(() => {
        if (kakaRef.current) {
            kakaRef.current.addEventListener('timeupdate', handleTimeUpdate);
            kakaRef.current.addEventListener('loadedmetadata', () => {
                setDuration(kakaRef.current!.duration);
            });
        }
        return () => {
            if (kakaRef.current) {
                kakaRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    function formatTime(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }


    return (
        <div className="landing-page">
            <div className="main-section"></div>
            <div className="music-card">
                <div className="volumebar-container">
                    <div className="volumebar">
                        <input type="range" className='volumebar' min={0} max={MAX} onChange={handleVolume} />
                        <p className='currentVolume'>{currentVolume}</p>
                    </div>
                </div>
                <p className="release">2024 · VULTURES 1</p>
                <img src={cover} alt="cover" className="cover" />
                <p className="title">Burn</p>
                <p className="artist">¥$, Kanye West, Ty Dolla $ign</p>
                    <div className="slider">
                        <input type="range" className='slider' value={currentTime} max={duration || 0} onChange={handleSliderChange} />
                        <p className="counter">{formatTime(currentTime)} / {formatTime(duration)}</p>
                    </div>
                    <div className="play" onClick={toggleAudio}>
                        {play ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </div>
                <div className="buttons-container">
                    <div className="buttons">
                        <div className="shuffle">
                            <FaShuffle size={20} color={'#D1E8E2'} />
                        </div>
                        <div className="loop" onClick={toggleLoop}>
                            <TiArrowLoop size={30} color={loop ? 'orange' : 'white'} />
                        </div>
                        <div className="like">
                            <FaHeart size={20} color={'#19747E'}/>
                        </div>
                    </div>
                </div>
            </div>
            <audio ref={kakaRef} src={audio} />
        </div>
    )
}
 
export default LandingPage
