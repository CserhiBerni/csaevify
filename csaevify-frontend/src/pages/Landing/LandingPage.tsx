import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import MusicCard from "../../components/CardTest/MusicCard";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <div className="main-section"></div>
        <MusicCard />
      </div>
    </div>
  );
};

export default LandingPage;
