import React from 'react'
import './List.css'
function List(props) {
  return (
    <div className='list-items'>
        {props.item}
    </div>
  )
}

export default List
