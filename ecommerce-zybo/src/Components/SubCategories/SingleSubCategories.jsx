import React from 'react'
import './SingleSubCategories.css'

function SingleSubCategories({imgSrc ,nameOfImg}) {
  return (
    <div className='SingleSubCategories'>
      <img src={imgSrc} alt="" />
      <p>{nameOfImg}</p>
    </div>
  )
}

export default SingleSubCategories