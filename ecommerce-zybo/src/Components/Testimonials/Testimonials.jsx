import React from 'react'
import './Testimonials.css'
import lady2 from '../../assets/lady2.png'
import plant5 from '../../assets/plant5.png'


function Testimonials() {
  return (
    <div className='testimonials'>
        <div className="testimonial-text">
                <h4>Testimonials</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, magnam! Labore ducimus laudantium quibusdam corrupti sequi assumenda necessitatibus nam maiores atque nesciunt fugiat debitis, provident, omnis culpa delectus a odio!</p>
        </div>
        <div className="lady-2">
            <img src={lady2} alt="" />
            <p>Name</p>
        </div>
    </div>
  )
}

export default Testimonials