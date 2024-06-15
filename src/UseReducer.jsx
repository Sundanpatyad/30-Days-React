import React, { useReducer, useState } from 'react'


const initialState = 0;
const reducer = (state, action) => {
if(action ==="add"){
    return state + 1;
}else if(action === "sub"){
    return state - 1;
}
}


const UseReducer = () => {



    const [count, dispatch] = useReducer(reducer, initialState);



    return (
        <div>The Number is {count}
            <button onClick={()=>dispatch("add")}>+</button>
            <button onClick={()=>dispatch("sub")}>-</button>
        </div>

    )
}

export default UseReducer