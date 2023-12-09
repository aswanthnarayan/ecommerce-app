import React from 'react'
import './SubCategories.css'
import subcat1Img from '../../assets/AGLAONEMA PINK 1.png'
import subcat2Img from '../../assets/Sansevieria Fernwood Mikado 1.png'
import subcat3Img from '../../assets/GOLDEN KING MARBLE 1.png'

import SingleSubCategories from './SingleSubCategories'

function SubCategories() {
  return (
    <div className='SubCategories'>
        <div className="main-SubCategories">
            <p>Sub Categories</p>
            <div className="content-container">
                <SingleSubCategories imgSrc={subcat1Img} nameOfImg='Flowering Plants'/>
                <SingleSubCategories imgSrc={subcat1Img} nameOfImg='Low-Light Plants'/>
                <SingleSubCategories imgSrc={subcat3Img} nameOfImg='PlaFlowering Plants'/>
            </div>
        </div>
        <div className="sub-categories"></div>
    </div>
  )
}

export default SubCategories