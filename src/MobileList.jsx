import React from 'react'
import "./MobileList.css"
const MobileList = (props) => {



  return (
    <div className='main'>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default MobileList