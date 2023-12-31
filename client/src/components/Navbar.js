
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser } from '../utils/loginSlice'
import { Link } from 'react-router-dom'
import { logout, resetState } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import useLoggeout from '../hooks/useLoggeout'

// React Icons
import { BsCart4 } from 'react-icons/bs'
import { Button } from '@material-tailwind/react'
import { getProducts } from '../features/products/productSlice'
import { toast,ToastContainer } from 'react-toastify'


const Navbar = () => {
  const auth=useSelector(store=>store.auth)
let user
const navigate=useNavigate()
const dispatch=useDispatch() 
const [searchSuggestion,setSearchSuggestion]=useState('')


let token=useSelector((store)=>store.user.token)
console.log(user)





const loggout=()=>{
  dispatch(logout())
  dispatch(resetState())
  
  setTimeout(()=>{
   
    navigate('/login')
  },100)
}







  
  console.log("user")
  console.log(user)

  return (
    <div className='w-screen fixed z-20 top-0 h-28 bg-white shadow-2xl flex justify-evenly items-center'>
      <ToastContainer/>
      <div className='w-1/12'>
        <h1 className='font-bold text-2xl'><Link to={'/home'}>E-Comx</Link></h1>
      </div>
      <ul>
        <li className='uppercase text-slate-700 text-xl'><Link to={'/user-dashboard'}>User</Link></li>
      </ul>
     
      <input value={searchSuggestion} onChange={(e)=>{setSearchSuggestion(e.target.value)}} className='border-none w-1/3 h-[50%] bg-blue-gray-100 ps-60'   placeholder='Search Here'/>
      <button className='h-[55%] ms-[-6.2%] w-[6%] border text-white font-bold bg-blue-gray-900'>Search</button>
      
      
      {
        searchSuggestion.length!=0?<div className='absolute top-24 rounded-2xl left-[29.3%] w-[33.5%] h-[500px] bg-slate-200  shadow-2xl'></div>:null
      }
      
      
        {
          
        auth?.user ?<Button onClick={()=>
          {
            loggout()
           
          }
        } className='bg-black text-white font-bold w-56 h-14'>{`Logout`} </Button> :<Button className='bg-black text-white font-bold w-1/12 h-1/2'><Link to='/login'>Login</Link> </Button>
        }

        

        <div className='flex justify-evenly gap-24'>
        
        <div className='text-green-500'><Link to={'/user-cart'}><BsCart4 size={50} /></Link></div>
        <div className='text-green-500'><Link to={'/user-dashboard/wishlist'}>Wishlist</Link></div>

        </div>
        
    </div>
  )
}

export default Navbar