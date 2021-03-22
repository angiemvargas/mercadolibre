import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import DetailProduct from './Detail';

const MainLayout = () => (
    <div className="App">
        <Navbar></Navbar>
      <DetailProduct></DetailProduct>
    </div>
)

export default MainLayout