import React, { useState } from 'react'
import './Card.css'
import heartIcon from '../../assets/icons/heart.png'

function Card({ imageSrc, description,price }) {
    const [showButton, setshowButton] = useState(false);
    const [heartClicked, setHeartClicked] = useState(false);

    const hoverFunction=(e)=>{
        setshowButton(true)

    }
    const notHoverFunction=(e)=>{
        setshowButton(false)
       
    }
    const toggleHeartColor = () => {
        setHeartClicked(!heartClicked);
      };

  return (
    <div className="card"
    onMouseEnter={hoverFunction}
    onMouseLeave={notHoverFunction}
    >
     <div className="product">
      <img className={`wishlist ${heartClicked ? 'heart-clicked':'wishlist'}`} src={heartIcon} alt="" 
      onClick={toggleHeartColor}/>
      <img src={imageSrc} alt="Product" className="card-image" />
     </div>
      <div className="description">
      <div className={'card-description'}>{description}</div>
      <div className={'price'}>{price}</div>
      </div>
      {
        showButton&&(
            <button className='add-to-cart'>Add To Cart</button>
        )
      }
    </div>
  )
}

export default Card