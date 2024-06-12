import React from 'react'
import MobileList from './MobileList'
const book1={
  image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/t/-original-imagtc6ffhgm3f2g.jpeg?q=70",
  title:"Apple iPhone 15 Plus (Green, 128 GB)",
  price:"₹82,499"
} 

const book2={
  image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
  title:"Apple iPhone 15 Plus (Blue, 128 GB)",
  price:"₹82,499"
} 


const Mobile = () => {
  return (<>
  <div>
    <h1 className='heading'>Mobile Phones</h1>
  </div>
    <div>
<MobileList image={book1.image} price={book1.price} title={book1.title} greet={"hello"}/>
<MobileList image={book2.image} price={book2.price} title={book2.title} greet={"hello"}/>


    </div>
    </>
  )
}

export default Mobile