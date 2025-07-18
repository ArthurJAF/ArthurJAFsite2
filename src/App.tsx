import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//COMPONENTS
import Navbar from './components/NavBar'
import About from './components/About'

function App() {

  return (
    <>
    <header><Navbar/></header>
    <body>
      <About/>
    </body>
      
    </>
  )
}

export default App
