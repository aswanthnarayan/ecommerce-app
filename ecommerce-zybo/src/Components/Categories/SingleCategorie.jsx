import React from 'react'
import './SingleCategorie.css'

function SingleCategorie({imgSrc,nameOfImg}) {
  return (
    <div className='SingleCategorie'>
      <img src={imgSrc} alt="" />
      <p>{nameOfImg}</p>
    </div>
  )
}

export default SingleCategorie