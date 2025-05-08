import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [feedback,setFeedback]=useState("");
  const sendfeed=async (e) => {
    e.preventDefault();
    if(name.trim()&&email.trim()&&feedback.trim())
    {
      fetch("http://localhost:8081/feedback",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,feedback})}).then(res=>{res.text();console.log(res.text());
      });
    }
    setName("");
    setEmail("");
    setFeedback("");
  }

  
 

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="intro">We’d love to hear from you! Whether you have a question, feedback, or just want to say hello.</p>
      
      <div className="contact-grid">
        <div className="contact-info">
          <h2><FontAwesomeIcon icon={faEnvelope} /> Email</h2>
          <p>support@edutech.com</p>

          <h2><FontAwesomeIcon icon={faPhone} /> Phone</h2>
          <p>0123456789</p>

          <h2><FontAwesomeIcon icon={faLocationDot} /> Address</h2>
          <p>EduTech , Chennai, India</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name"    value={name} onChange={e=>setName(e.target.value)} required />
          <input type="email" placeholder="Your Email"  value={email} onChange={e=>setEmail(e.target.value)} required />
          <textarea rows="5" placeholder="Your Message" value={feedback} onChange={e=>setFeedback(e.target.value)} required></textarea>
          <button onClick={(e)=>sendfeed(e)}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
