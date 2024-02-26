import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar';
import MusicCard from '../../components/MusicCard/MusicCard';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar/>
            <MusicCard/>
        </div>
    )
}
 
export default LandingPage
