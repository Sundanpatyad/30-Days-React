import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[clicked , setClicked]= useState();
    const [ count , setCount]=useState(0)
    
    useEffect(()=>{
        alert(' We Use Effect')
        },[clicked])
  return (
    <div>
        <button onClick={()=> setClicked('Subscribe')}>
            Subscribe
        </button>
        <br /><hr />
        <button  onClick={()=> setClicked('To')}>
            To
        </button>
        <br /><hr />
        <button  onClick={()=> setClicked('Sundan Sharma')}>
            Sundan Sharma
        </button>
        <h1>{clicked}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect