import React from 'react'
import ReactDOM from 'react-dom/client'
import Mobile from './Mobile'
import Data from './Data'
import Form from './Form'
import UseEffect from './UseEffect'
import UseReducer from './UseReducer'
import UseRedducrFetchApi from './UseRedducrFetchApi'
import "./index.css";
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <UseRedducrFetchApi/> */}
    {/* <UseReducer/> */}
    {/* <UseEffect/>
    <Form/>
   <Mobile></Mobile>
   <Data/> */}
  </React.StrictMode>,
)
