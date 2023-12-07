import React from 'react'
import './ProductReview.css'
import thumbnail from '../../assets/Mask group.png'
import eclipse2 from '../../assets/icons/Ellipse 2.png'
import eclipse3 from '../../assets/icons/Ellipse 3.png'
import playbtn from '../../assets/icons/material-symbols_play-arrow-outline-rounded.png'



function ProductReview() {
  return (
    <div className='productcontainer'>
      <div className="product-description">
        <h2>The world's 1st subscription based Indoor Plant Company</h2>
        <p>The world’s first subscription-based Indoor Plant Company – Harvestay is revolutionising the way people buy and care for their plants. With this innovative model, customers can subscribe to a monthly delivery of a curated selection of healthy and vibrant plants that</p>
      </div>
      <div className="video-image">
        <img src={thumbnail} alt="" className='main-image'/>
        <div className="play-button">
          <img src={eclipse2} alt="" className="eclipse2" />
          <img src={eclipse3} alt="" className="eclipse3" />
          <img src={playbtn} alt="" className="playbtn" />
        </div>
      </div>
    </div>
  )
}

export default ProductReview