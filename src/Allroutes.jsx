import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import IndiProduct from './Pages/IndiProduct'
import PrivateRoute from './PrivateRoute'


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />} />
        <Route path='/product/:id' element={<IndiProduct />}/>
        <Route path="/cart">Cart</Route>
        <Route path="/orders">Orders Page</Route>
    </Routes>
  )
}

export default Allroutes