import React, { useState } from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../utils/loginSlice'
import { RxDashboard } from 'react-icons/rx'

const Sidebar = () => {
  const navigate=useNavigate()
const dispatch=useDispatch()
const [isOrderNavOpen,setIsNavOpen]=useState(false)


const logout = () =>{
  
  
  axios.get('/user/logout')
  .then((res)=>{
    console.log(res)
    dispatch(logout)
    navigate('/admin/admin-login')

  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className='w-80 h-screen border bg-black pt-16 fixed   text-white rounded-2xl'>
    <ul className='p-5 font-mono items-start  flex flex-col justify-start w-full text-lg'>
      <Link className='w-full pb-10' to="/">
        <li className='ps-10 w-full  p-3 hover:text-violet-900 hover:border-r-8 border-r-violet-500'><span className='flex'><RxDashboard size={25}/><h1 className='text-2xl ms-6'>Dashboard</h1></span></li>
        </Link>

        <div className='w-full mb-12'>
      <Link  className='w-full pb-10 ' >
      <li onClick={
        ()=>{

          isOrderNavOpen?setIsNavOpen(false):setIsNavOpen(true)
        }
        
      }
      className='ps-10 w-full  p-3 hover:text-violet-900 hover:border-r-8 border-r-violet-500'><span className='flex'><RxDashboard size={25}/><h1 className='text-2xl ms-6'>Orders</h1></span></li>
        </Link>
      { isOrderNavOpen &&
      <>
        <Link to={'/admin/view-orders'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>View Orders</li></Link>
        <Link to={'/admin/update-orders'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Edit Orders</li></Link>

        </>
       }
      </div>

     <Link to={'/admin/product-dashboard'} className='w-full pb-10' ><li className=' p-3 ps-14 w-full hover:text-violet-900   hover:border-r-8 border-r-violet-500 '>Products</li></Link>
     <Link to={'/admin/user-management'}  className='w-full pb-10' ><li className=' p-3 ps-14  w-full hover:text-violet-900   hover:border-r-8 border-r-violet-500 '>Customers</li></Link>
     <Link to={'/admin/add-category'} className='w-full pb-10' ><li className=' p-3 ps-14  w-full hover:text-violet-900       hover:border-r-8 border-r-violet-500 '>Category</li></Link>
     <Link className='w-full pb-10' ><li className=' p-3 ps-24 w-full hover:text-black    hover:border '>Products</li></Link>
    {/* <li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'><buttton  onClick={logout}  className="">Logout</buttton></li> */}



    </ul>

   
  </div>
  )
}

export default Sidebar