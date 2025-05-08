import React from 'react'
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faGears, faUsers, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div>
       <div className="about-container">
      <h1><FontAwesomeIcon icon={faInfoCircle} />About Us</h1><center>
      <p>Welcome to EduTech!!! We're passionate about delivering innovative solutions that make your life easier and more productive.</p></center>
      
      <h2><FontAwesomeIcon icon={faBullseye} /> Our Mission</h2>
      <p>Our mission is to provide high-quality services and experiences that empower users to achieve their goals efficiently.</p>

      <h2><FontAwesomeIcon icon={faEye} /> Our Vision</h2>
      <p>To become a leading platform that transforms how people interact with technology and unlock their full potential.</p>

      <h2><FontAwesomeIcon icon={faGears} />What We Offer</h2>
      <ul>
        <li>Easy-to-use tools and features</li>
        <li>Reliable and secure technology</li>
        <li>Excellent customer support</li>
        <li>Continuous updates and improvements</li>
      </ul>

      <h2><FontAwesomeIcon icon={faUsers} />Our Team</h2>
      <p>We're a team of passionate developers, designers, and visionaries committed to making a difference.</p>

      <h2><FontAwesomeIcon icon={faEnvelope} />Contact Us</h2>
      <p> support@edutech.com</p>
    </div>

    </div>
  )
}

export default About