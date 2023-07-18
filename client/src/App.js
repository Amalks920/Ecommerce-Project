
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { AdminHome } from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import Home from './pages/Home';
import { redirect } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AdminSignup } from './pages/admin/AdminSignup';
import AdminLogin from './pages/admin/AdminLogin';


let isLoggedIn

function App(){

   isLoggedIn=useSelector((store)=>store.user.user)
  
  
  return(
    <Provider store={store}>
    <div className="w-screen h-screen">
    
    <RouterProvider router={appRouter} isLoggedIn={false}/>

   
    </div>
    </Provider>
  )
}


const appRouter=createBrowserRouter([
 
  {
  path:"/",
  element:<MainContainer />,
  children:[
    {
    path:'/signup',
    element:<Signup />
    },
    {
      path:'/login',
      element:<Login />,
      children:[
        
      ]
    },
    {
      path:'/home',
      loader:isLoggedIn ? <Home />:null    
    }
  ]
},
{
  path:"/admin",
  element:<MainContainer/>,
  children:[
    {
    path:'/admin/add-product',
    element:<AddProduct />
    },
    {
      path:'/admin/admin-home',
      element:<AdminHome />
    },
    {
      path:'/admin/admin-signup',
      element:<AdminSignup />
    },
    {
      path:'/admin/admin-login',
      element:<AdminLogin />
    }
]
}
])

export default App;
