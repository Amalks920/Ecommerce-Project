
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
import { AdminSignup } from './pages/admin/AdminSignup';
import AdminLogin from './pages/admin/AdminLogin';
import { Route,Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth'


let isLoggedIn

function App(){

   isLoggedIn=useSelector((store)=>store.user.user)
  
  
  return(
    <Routes>
      <Route path='/' element={<MainContainer/>}>

         <Route path='login' element={<Login/>}></Route>
         <Route path='signup' element={<Signup/>}></Route>
         <Route element={<RequireAuth/>}>
         <Route path='home' element={<Home/>}></Route>
         </Route>

         <Route path='admin-home' element={<AdminHome/>}></Route>
         <Route path='admin-login' element={<AdminLogin/>}></Route>
         <Route path='admin-signup' element={<AdminSignup/>}></Route>
         <Route path='add-product' element={<AddProduct/>}></Route>


      </Route>
    </Routes>
  )
}


export default App;
