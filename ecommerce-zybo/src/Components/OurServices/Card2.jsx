import React, { useState } from 'react'
import './Card2.css'
function Card2({src,heading,para}) {
    const [showpara, setshowpara] = useState(false);
    const hoverFunction=(e)=>{
        setshowpara(true)
    }
    const notHoverFunction=(e)=>{
        setshowpara(false)
       
    }

  return (
       <div className='card2' style={{ backgroundImage: `url(${src})`, justifyContent:showpara ?'space-around':'flex-end' }}
       onMouseEnter={hoverFunction}
       onMouseLeave={notHoverFunction}
       >
         <p className='heading' style={{ display: showpara ? 'none' : '' }}>
          {heading}
        </p>

       <div className={`content ${showpara ? 'show-para' : ''}`}>
        {showpara && (
          <div className='text-div'>
            <p className='heading'>{heading}</p>
            <p>{para}</p>
            <p className='viewmore'>View more</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card2