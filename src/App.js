import React from 'react'
import './App.css';
import Product from './containers/Product'
import MainLayout from './view/MainLayout'


const App = () => (
    <Product>
      <MainLayout></MainLayout>
    </Product>
    );

export default App;
