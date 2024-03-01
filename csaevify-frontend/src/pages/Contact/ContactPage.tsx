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
               <p className='contact-quote'>"The Rhythm of Life!"</p>
               <div className='contact-us-section'>
                  <div className="first-part">
                     <h2 className='contact-us'>Contact Us!</h2>
                     <p className='contact-us-text'>Have questions or feedback? We're here to help! Reach out to us at <b>Csaevify</b> for any inquiries about our music player platform. Whether you're encountering technical issues, have suggestions for improvement, or simply want to say hello, we'd love to hear from you.
                     <br />
                     <br />
                     Feel free to contact us through this contact form. Our dedicated team is committed to providing you with the best music streaming experience possible. Let's keep the music playing!</p>
                  </div>
                  <div className="second-part">
                  <label className='name-label'>Name</label>
                     <div className='name-inputs'>
                        <input className='firstName' type="text" placeholder='Your First Name' />
                        <input className='secondName' type="text" placeholder='Your Second Name' />
                     </div>
                  <label className='email-label'>Email</label>
                     <div className='email-input'>
                        <input type="email" className='emailInput' placeholder='your.email@gmail.com'/>
                     </div>
                  <label className='message-label'>Message</label>
                     <div className='message-input'>
                        <input type="text" className='messageInput' placeholder='What can we do for You?'/>
                     </div>
                  </div>
               </div>
               <button className='sendbtn'>Send</button>
            </div>
            <MusicCard />
         </div>
      </div>
   )
}

export default ContactPage