import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'typeface-cormorant-garamond';

//Screens
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import CartScreen from './screens/CartScreen.js'
import Landing from './screens/Landing.js'
import Login from './screens/Login.js'
import Register from './screens/Register.js'
import Checkout from './screens/Checkout.js'
import Dashboard from './screens/admin/Dashboard.js'
import Orders from './screens/admin/Orders.js'
import Users from './screens/admin/Users.js'

//Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
import Header from './components/Header'


function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
      <BrowserRouter>
        <ToastContainer/>
        <Navbar click={() => setSideToggle(true)} />
        {/* <Header /> */}
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route path ="/home" element={<Landing />} />
          <Route path ="/" element={<Landing />} />
          <Route path ="/shop" element={
            <> 
              <Header />
              <HomeScreen />
            </>} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
