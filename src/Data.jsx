import React, { useState } from 'react'
import datas from "../data.json"

const Data = () => {
    const [ndata, setnData] = useState(datas)
    console.log(ndata);
const handeClick =()=>{
    setnData([]);
}
const handleRemove =(itemId)=>{
setnData(ndata.filter(item => item.id!==itemId));
}
const handleUpdate =(itemId)=>{
    setnData(ndata.map(item => {
        if(item.id === itemId){
            return{name:"newname"}

        }else{
            return item;
        }
    }))
    }
    return (
        <div>
            <ul>
                {ndata.map(item => (
                    <li key={item.id}>
                        {item.name} 
                        <button onClick={()=> handleRemove(item.id)}>Remove</button>
                        <button onClick={()=> handleUpdate(item.id)}>update</button>
                    </li>
                ))}
            </ul>
            <button onClick={handeClick}>Clear</button>
        </div>
    )
}

export default Data
