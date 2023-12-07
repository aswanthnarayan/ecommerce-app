import React from 'react'
import './SingleList.css'

function SingleList({number,textType}) {
  return (
    <div className='single-list'>
        <h2>{number}+</h2>
         <p>{textType}</p>
         <hr />
    </div>
    
  )
}

export default SingleList