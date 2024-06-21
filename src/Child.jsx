import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = (props , ref) => {
    const [ openModal , setOpenModal] = useState(false)
    useImperativeHandle(ref , ()=>({
        openModal: (value)=>setOpenModal(value)
    }));
    if(!openModal) return null;

  return (
    <div>
     <h1 className='text-5xl text-gray-900'>This is modal body</h1>
     <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{setOpenModal(false)}}>Close</button>
    </div>
  )
}

export default  forwardRef(Child);