import React, { useImperativeHandle, useRef, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const childRef = useRef();
   const handleOpenModal = (val) =>{
    childRef.current.openModal(val);
   }
    return (
        <div>
            <h1 className='text-5xl text-gray-900'>This is modal</h1>
            <Child ref={childRef}/>
            <button onClick={()=>{handleOpenModal(true)}} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Open Modal</button>

        </div>
    )
}

export default Parent;