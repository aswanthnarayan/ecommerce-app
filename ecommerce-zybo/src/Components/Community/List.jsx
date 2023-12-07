import React from 'react'
import SingleList from './SingleList'
import './List.css'

function List ({number,textType}) {
  return (
    <div className='list'>
        <SingleList number={number[0]} textType={textType[0]}/>
        <SingleList number={number[1]} textType={textType[1]}/>
        <SingleList number={number[2]} textType={textType[2]}/>
    </div>
  )
}

export default List