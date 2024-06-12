import React from 'react'
import "./MobileList.css"
const MobileList = (props) => {
const {image , price , title }= props;


  return (
    <div className='main'>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default MobileList