import React from 'react'
import ReactDOM from 'react-dom/client'
import Mobile from './Mobile'
import Data from './Data'
import Form from './Form'
import UseEffect from './UseEffect'
import UseReducer from './UseReducer'
import UseRedducrFetchApi from './UseRedducrFetchApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseRedducrFetchApi/>
    {/* <UseReducer/> */}
    {/* <UseEffect/>
    <Form/>
   <Mobile></Mobile>
   <Data/> */}
  </React.StrictMode>,
)
