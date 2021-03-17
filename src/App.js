import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './view/Navbar'
import Routes from './Routes'
import DetailProduct from './view/Detail';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DetailProduct></DetailProduct>
    </div>
  );
}

export default App;
