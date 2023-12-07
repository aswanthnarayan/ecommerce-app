import React from 'react'
import image1 from '../../assets/plant1.png'
import image2 from '../../assets/plant2.png'
import image3 from '../../assets/plant3.png'
import image4 from '../../assets/plant4.png'
import Card2 from './Card2'
import './OurServices.css'



function OurServices() {
  return (
    <div className="service-card">
        <Card2 src={image1} heading='Easy Plant Kits' para='A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.'/>
        <Card2 src={image2} heading='Easy Plant Kits' para='A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.' />
        <Card2 src={image3} heading='Easy Plant Kits' para='A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.'/>
        <Card2 src={image4} heading='Easy Plant Kits' para='A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.'/>
    </div>
  )
}

export default OurServices