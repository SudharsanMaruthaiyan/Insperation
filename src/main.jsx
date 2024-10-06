import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createRoot } from 'react-dom/client'
import Featured from './Components/Futured/Featured'
import Body from './Components/Body/Body'

const AppLayout = ()=>{
  return(
    <>
      <Body/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)