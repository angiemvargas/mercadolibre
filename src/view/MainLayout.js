import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import Routes from '../Routes'

const MainLayout = () => {

  return ( 
    <div className="App">
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
)}

export default MainLayout