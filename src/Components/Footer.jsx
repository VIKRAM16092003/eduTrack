import React from 'react';
import './Footer.css'; // If you're using a separate CSS file for the footer

const Footer = () => {
  
  return (
    <footer>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-10">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small><i className="fa fa-phone-alt mr-2"></i> Phone:0123456789</small>
              <small className="px-3">|</small>
              <small><i className="fa fa-envelope mr-2"></i> email:support@edutech.com</small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
