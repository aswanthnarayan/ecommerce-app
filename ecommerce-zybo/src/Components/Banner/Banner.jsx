import React ,{ useState, useEffect } from 'react'
import './Banner.css'
import banner1 from '../../assets/BANNER.png';
import banner2 from '../../assets/Banner2.jpg';
import banner3 from '../../assets/Banner3.jpg';
import Navbar from './Navbar/Navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight ,faAnglesLeft} from '@fortawesome/free-solid-svg-icons'
import rightArrow from '../../assets/icons/material-symbols_arrow-right-alt-rounded.png'


function Banner() {

  const [currentImage, setCurrentImage] = useState(0); 
  const images = [banner1, banner2, banner3]; 

  const nextImage = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImage === 0 ? images.length - 1 : currentImage - 1);
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]); 


  return (
    <div className="banner-container">
        <div className="banner">
         <img src={images[currentImage]} alt={`Banner Image ${currentImage + 1}`} />
         <div className="carousel-controls">
          <button className='angle-btn btn-left' onClick={prevImage}><FontAwesomeIcon icon={faAnglesLeft} /></button>
          <button className='angle-btn btn-right' onClick={nextImage}><FontAwesomeIcon icon={faAnglesRight} /></button>
        </div>
        <div className="shop-now-btn">
          <button className='shop-now'>Shop Now <img src={rightArrow} alt="rightarrow" /></button>
        </div>
         <Navbar />
        </div>
    </div>
  )
}

export default Banner