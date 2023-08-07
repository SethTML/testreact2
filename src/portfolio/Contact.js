import GITHUBgo from './Images/GITHUBgo.png';
import openlink from './Images/openlink.png';
import location from './Images/location.png';
import email from './Images/email.png';

function Contact(props) {

  return (
    <div className = 'ContactCover'>
      <div className = 'Contact reveal'>
        <span className = 'Crumb'>Contact</span>
        <span className = 'Head'>Contact Me!</span>
        <div className = 'ContactBox'>
          <iframe className = 'LocationFrame' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49113.126449028154!2d-75.11809833520633!3d39.7043620621933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1688874162441!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className = 'ContactInfo'>
            <div className = 'CIBox'>
              <div className = 'InfoImage'>
                <img alt = "Location Icon" src = {location} height = "45%"></img>
              </div>
              <span className = 'InfoTitle'>Location</span>
              <span className = 'InfoContent'>Glassboro, New Jersey</span>
            </div>
            <div className = 'CIBox'>
            <div className = 'InfoImage'>
                <img alt = "Mail Icon" src = {email} height = "45%"></img>
              </div>
              <span className = 'InfoTitle'>Email</span>
              <span className = 'InfoContent'>slprogram2005@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
