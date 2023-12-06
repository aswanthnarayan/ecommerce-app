import React from 'react'
import './Navbar.css'
import logo from '../../../assets/green-logos-famous-brands-1 1.png';
import searchIcon from '../../../assets/icons/green-logos-famous-brands-1 1.png'
import contactIcon from '../../../assets/icons/Component 4.png'
import cartIcon from '../../../assets/icons/Component 2.png'

function Navbar() {
  return (
    <div className='navbar'>
    <img className='logo' src={logo} alt="" />
    <nav >
        <ul className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact US</a></li>
        </ul>
      </nav>
      <div >
        <ul className="icons">
          <li><a href="#"><img src={searchIcon} alt="" /></a></li>
          <li><a href="#"><img src={contactIcon} alt="" /></a></li>
          <li><a href="#"><img src={cartIcon} alt="" /></a></li>
        </ul>
      </div>
  </div>
  )
}

export default Navbar