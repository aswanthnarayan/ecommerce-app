
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy & Terms</a>
      </div>
      <div className="icons">
        <a href="#" className='icon'><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" className='icon'><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className='icon'><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
}

export default Footer;
