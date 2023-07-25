
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './utils/store';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { AdminHome } from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import  Home from './pages/Home'
import { redirect } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import  AdminSignup  from './pages/admin/AdminSignup';
import AdminLogin from './pages/admin/AdminLogin';
import { Route,Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth'
import ProtectedRoute from './components/ProtectedRoute';
import RequireRoleAuth from './components/RequireRoleAuth';
import ProductManagement from './pages/admin/ProductManagement';
import EditProduct from './pages/admin/EditProduct';
import UserManagement from './pages/admin/UserManagement';
import OtpLogin from './pages/OtpLogin';

let isLoggedIn

function App(){

   isLoggedIn=useSelector((store)=>store.user.user)
  
  
  return(
    <Routes>
      <Route path='/' element={<MainContainer/>}>

    
         <Route path='login' element={<Login/>}></Route>
         <Route path='signup' element={<Signup/>}></Route>
         <Route path='otp-login' element={<OtpLogin/>}></Route>

         <Route element={<RequireAuth/>}>
         <Route path='home' element={<Home/>}></Route>
         </Route>

         {/* <Route element={<RequireRoleAuth />}> */}
         <Route path='admin-login' element={<AdminLogin/>}></Route>
         <Route path='admin-signup' element={<AdminSignup/>}></Route>
         
         <Route element={<RequireAuth/>}>
         <Route path='admin-home' element={<AdminHome/>}></Route>
         
         <Route path='add-product' element={<AddProduct/>}></Route>
         <Route path='product-management' element={<ProductManagement/>} ></Route>
         <Route path="edit-product" element={<EditProduct/>}></Route>
         <Route path="user-management" element={<UserManagement />}></Route>
         </Route>
         {/* </Route> */}


         </Route>
     
    </Routes>
  )
}


export default App;
