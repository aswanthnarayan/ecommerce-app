import React from 'react'
import Card from './Card'
import './RecentProducts.css'
import productImg1 from '../../assets/AGLAONEMA PINK 1.png'
import productImg2 from '../../assets/GOLDEN KING MARBLE 1.png'
import productImg3 from '../../assets/Radish microgreen seeds 1.svg'
import productImg4 from '../../assets/Sansevieria Fernwood Mikado 1.png'


function RecentProducts() {
  return (
    <div className="main-container">
        <p>Our Recent Products</p>
    <div className="container">
    <Card imageSrc={productImg1} description="Aglaonema" price={'$ 250'}/>
    <Card imageSrc={productImg2} description="Golden King Marble" price={'$ 340'}/>
    <Card imageSrc={productImg3} description="Radish Micro Green" price={'$ 250'}/>
    <Card imageSrc={productImg4} description="Sanservia Fernwood" price={'$ 250'}/>
   </div>
    </div>
   
  )
}

export default RecentProducts