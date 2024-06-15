
import React, { useReducer } from 'react'
const initialState ={
    data:[],
    loading: false,
    error:null

}
const reducer = (state , action)=>{
switch(action.type){
    case "FETCH_INIT":
        return({...state , loading:true});
        case "FETCH_DATA_SUCCESS":
            return({loading:false , error: null , data: action.payload});
            case "FETCH_FAILURE":
                return({error:action.payload , loading:false});
                case "DELETE_DATA":
                   return({...state , data:state.data.filter((item)=>{
                    return item.id !== action.payload
                   })})
                   case "ADD_DATA":
                    return({...state , data: [...state.data , action.payload]})
}
}

const UseRedducrFetchApi = () => {
const [state , dispatch] = useReducer(reducer , initialState);

const fetchData=async()=>{
    dispatch({type:"FETCH_INIT"});
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        dispatch({type:"FETCH_DATA_SUCCESS", payload: data});
        console.log(data);

    }catch(e){
        dispatch({type:"FETCH_FAILURE" , error:e});
    }
}

 const deleteData =(id)=>{
    dispatch({type:"DELETE_DATA", payload:id})

 }
 const addData =(newData)=>{
    dispatch({type:"ADD_DATA"  , payload:newData}) 
 } 

  return (
   <div>
            <button onClick={fetchData}>
                Fetch Data
            </button>
            {state.loading && <h1>Loading...</h1>}
            {state.error && <h1>Error in fetching data: {state.error}</h1>}
            <ul>
                {state.data.map((item, index) => (
                    <li key={index}>{item.title} <button onClick={()=>deleteData(item.id)}>Delete</button></li>
                ))}
            </ul>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log("form submitted");
                addData({
                    id:Date.now(),
                    title:e.target.title.value,
                })
            }}>
                <input type="text" name="title" placeholder='Add Title' />
                <button type='submit'>Submit</button>
            </form>
        </div>
  )
}

export default UseRedducrFetchApi