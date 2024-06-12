import React from 'react'
import MobileList from './MobileList'
import books from "../books.json"
const Mobile = () => {
  return (<>
  <div>
    <h1 className='heading'>Mobile Phones</h1>
  </div>
    <div>
     {books.map(elem => {
  return (
    <MobileList 
      image={elem.image} 
      price={elem.price} 
      title={elem.title} 
      greet="hello"
    />
  );
})}



    </div>
    </>
  )
}

export default Mobile