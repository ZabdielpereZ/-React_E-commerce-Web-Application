import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import ProductCatalog from './components/ProductCatalog';
import TrackOrder from './components/TrackOrder';
import CustomerDetails from './components/CustomerDetails';
import UpdateCustomer from './components/UpdateCustomer';
import EditProducts from './components/EditProducts';
import ProductDetails from './components/ProductDetails';
import AddProducts from './components/AddProducts';
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <div>

    <NavigationBar/>
      
    <Routes>
      <Route path="/" element={<p>Home</p>} />

      {/* ==== customers ==== */}
      {/* List customers */}
      <Route path='/customers' element={<CustomerList/>} />

      {/* add customer */}
      <Route path='/add-customers' element={<CustomerForm/>} />

      {/* Customer Details */}
      {/* TODO - CustomerDetails.jsx ✅*/}
      <Route path='/customer/:id' element={<CustomerDetails />} />

      {/* Update customer form */}
      {/* TODO - UpdateCustomer.jsx ✅ */}
      <Route path='/update-customer/:id' element={<UpdateCustomer />} />

      {/* ==== PRODUCTS ==== */}
      <Route path='/product-catalog' element={<ProductCatalog />} />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/add-product' element={<AddProducts/>} />

      {/* TODO - EditProduct.jsx */}
      <Route path='/edit-product/:id' element={<EditProducts/>} />

      {/* ==== ORDERS ==== */}
      <Route path='/track-order-status' element={<TrackOrder/>} />
      <Route path='/orders' element={<OrderForm/>} />

      
    </Routes>

    </div>
  )
}

export default App