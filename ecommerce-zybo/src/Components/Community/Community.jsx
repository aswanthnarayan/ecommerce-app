import React from 'react'
import ladyImg from '../../assets/Portrait of blonde woman holding a plant.png'
import './Community.css'
import List from './List.jsx'
import eclipse3 from '../../assets/icons/Ellipse 3.png'


function Community() {
  return (
    <div className='community'>
        <List number={[400,1200,1250]} textType={['PRODUCTS','ORDERS','PLANT TYPE']}/>
         <div className="img-container">
           <img src={eclipse3} alt="" className="eclipse" />
            <img src={ladyImg} alt="" className='lady-img'/>
         </div>
        <List number={[350,400,1250]} textType={['PROJECTS DONE','HAPPY CLIENTS','PLANT TYPES']}/>
       <hr />
    </div>
  )
}

export default Community