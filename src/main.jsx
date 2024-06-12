import React from 'react'
import ReactDOM from 'react-dom/client'
import Mobile from './Mobile'
import Data from './Data'
import Form from './Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form/>
   <Mobile></Mobile>
   <Data/>
  </React.StrictMode>,
)
