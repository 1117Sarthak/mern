import React from 'react'
import Navbar from './components/Navbar';
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Signin from "./components/Signin"
import Register from "./components/Register"

const App = () => {
  return (
    <>
    {/* <h1>helo sir</h1> */}
    <Navbar/>
    

    <Routes>
        
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/register' element={<Register />} />
  
      </Routes>
      
    </>
  )
}

export default App;
