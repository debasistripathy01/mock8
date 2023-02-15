import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import DetailsProduct from './Pages/DetailsProduct'


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />} />
        <Route path='/product/:id' element={<DetailsProduct />}/>
        <Route path="/cart">Cart</Route>
        <Route path="/orders">Orders Page</Route>
    </Routes>
  )
}

export default Allroutes