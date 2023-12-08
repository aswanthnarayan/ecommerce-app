import React from 'react'
import './Enquire.css'
import enquireImg from '../../assets/enquire.png'

function Enquire() {
    return (
        <div className="enquire">
            <div className="btn-and-text">
                <p >Discover the convenience of online shopping &
                    the opportunity of franchise ownership </p>
                <button className='enquire-btn'>Enquire now</button>
            </div>
            <div className="enquire-img">
                <img src={enquireImg} alt="" />
            </div>
        </div>
    )
}

export default Enquire