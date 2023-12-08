import React from 'react'
import './Categories.css';
import SingleCategorie from './SingleCategorie';
import cat1Img from '../../assets/Monstera deliciosa plant in a pot.png'
// import cat1Img from '../../assets/Monstera deliciosa plant in a pot.png'
// import cat1Img from '../../assets/Monstera deliciosa plant in a pot.png'


function Categories() {
  return (
    <div className='categories'>
        <div className="main-categories">
            <p>Categories</p>
          <div className="content-container">
            <SingleCategorie imgSrc={cat1Img} nameOfImg='Plants'/>
            <SingleCategorie imgSrc={cat1Img} nameOfImg='Plants'/>
            <SingleCategorie imgSrc={cat1Img} nameOfImg='Plants'/> 
            <div className="button-container">
              <button>See more</button>
            </div>
            </div>
        </div>
        <div className="sub-categories"></div>
    </div>
  )
}

export default Categories