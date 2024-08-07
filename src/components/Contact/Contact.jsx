import {useRef, useContext} from 'react'
import './contact.css'
import Github from '../../assets/github300.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/insta.png'
import Facebook from '../../assets/facebook.png'
import emailjs from '@emailjs/browser'
import { ExternalLink } from 'react-external-link'
import { TextboxContext } from '../Context/Context'
// import { useState } from 'react'
import { useEffect } from 'react'


function Contact() {
  const { hireClicked, setHireClicked } = useContext(TextboxContext);
  const {message, setMessage } = useContext(TextboxContext);
  // const [message, setMessage] = useState('');

  useEffect(() => {
    if (hireClicked) {
      setHireClicked(false); // Reset the hireClicked state after setting the message.
    }
  }, [hireClicked, setHireClicked]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q6n28kk', 'template_eqis3ky', form.current, 'SYIBtYfgA3Pvnl2W4')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
    };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" required/>
          <input type="email" className="email" placeholder="Your Email" name="from_email" required />
          <textarea className="msg" name="message" rows="5" placeholder='Your Message' onChange={handleChange} value={message} required ></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit </button>
          <div className="links">
            <ExternalLink href="https://github.com/RohillaNisha"> <img src={Github} alt="github image" className="link" /> </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/nisharohilla88/"> <img src={LinkedIn} alt="linkedin image" className="link" /> </ExternalLink>
            <ExternalLink href="https://www.facebook.com/profile.php?id=100000610492043"> <img src={Facebook} alt="facebook image" className="link" /> </ExternalLink>
            <ExternalLink href="https://www.instagram.com/nisha.bioinfo/"> <img src={Instagram} alt="instagram image" className="link" /> </ExternalLink>
          </div>
        </form>
      </div>
        
    </section>
  )
}

export default Contact