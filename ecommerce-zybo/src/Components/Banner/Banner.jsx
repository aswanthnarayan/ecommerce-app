import React from 'react'
import './Banner.css'
import banner from '../../assets/BANNER.png';
import Navbar from './Navbar/Navbar.jsx';

function Banner() {
  return (
    <div className="banner-container">
        <div className="banner">
         <img src={banner} alt="Banner Image" />
         <Navbar />
        </div>
    </div>
  )
}

export default Banner