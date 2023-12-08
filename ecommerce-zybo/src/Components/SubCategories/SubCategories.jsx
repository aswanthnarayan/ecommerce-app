import React from 'react'
import './SubCategories.css'
import cat1Img from '../../assets/Monstera deliciosa plant in a pot.png'
import SingleSubCategories from './SingleSubCategories'

function SubCategories() {
  return (
    <div className='SubCategories'>
        <div className="main-SubCategories">
            <p>Sub Categories</p>
            <div className="content-container">
                <SingleSubCategories imgSrc={cat1Img} nameOfImg='Plants'/>
                <SingleSubCategories imgSrc={cat1Img} nameOfImg='Plants'/>
                <SingleSubCategories imgSrc={cat1Img} nameOfImg='Plants'/>
            </div>
        </div>
        <div className="sub-categories"></div>
    </div>
  )
}

export default SubCategories