import './ContactPage.css'
import Navbar from '../../components/Navbar/Navbar'
import MusicCard from '../../components/CardTest/MusicCard'

const ContactPage = () => {
   return (
      <div className="contact-page">
         <Navbar />
         <div className="contact-container">
            <div className="contact-main-section">
               <h1>Csaevify</h1>
               <p className='contact-quote'>The Rhythm of Life!</p>
               <div className='contact-us-section'>
                  <div className="first-part">
                     <h2 className='contact-us'>Contact Us!</h2>
                     <p>kakha</p>
                  </div>
                  <div className="second-part">
                     <input type="text" />
                  </div>
               </div>
            </div>
            <MusicCard />
         </div>
      </div>
   )
}

export default ContactPage