import React, {useRef} from 'react'
import './contact.css'
import Github from '../../assets/github300.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/insta.png'
import Facebook from '../../assets/facebook.png'
import emailjs from '@emailjs/browser'

function Contact() {
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
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit </button>
          <div className="links">
            <img src={Github} alt="github image" className="link" />
            <img src={LinkedIn} alt="linkedin image" className="link" />
            <img src={Facebook} alt="facebook image" className="link" />
            <img src={Instagram} alt="instagram image" className="link" />
          </div>
        </form>
      </div>
        
    </section>
  )
}

export default Contact