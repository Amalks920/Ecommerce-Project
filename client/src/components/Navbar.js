
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser } from '../utils/loginSlice'
import { Link } from 'react-router-dom'
import { logout } from '../utils/loginSlice'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
const Navbar = () => {
let user
const navigate=useNavigate()
const dispatch=useDispatch() 

let token=useSelector((store)=>store.user.token)
console.log(user)




const logout = () =>{
  
  
  axios.get('/user/logout')
  .then((res)=>{
    console.log(res)
    dispatch(logout)
    navigate('/login')

  })
  .catch((err)=>{
    console.log(err)
  })

   
}





  
  console.log("user")
  console.log(user)

  return (
    <div className='w-screen fixed z-20 top-0 h-28 bg-white shadow-2xl flex justify-evenly items-center'>
      <div className='w-1/6'>
        <h1 className='font-bold text-2xl'>E-Comx</h1>
      </div>
      <ul className='flex justify-between w-1/3'>
        <li><Link to={'/login'}>Home</Link></li>
        <li><Link to={'/user-dashboard'}>User</Link></li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
     
      
        {
          
        token ?<button onClick={()=>{logout()}} className='bg-slate-600 text-white font-bold w-56 h-14'>{`Logout`} </button> :<button className='bg-slate-600 text-white font-bold w-1/12 h-1/2'><Link to='/login'>Login</Link> </button>
        }
        

        <div>
        
        <div className='text-green-500'><Link to={'/user-cart'}>Cart</Link></div>
        </div>
        
    </div>
  )
}

export default Navbar