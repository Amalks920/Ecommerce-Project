import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import AdminNavbar from '../pages/admin/AdminNavbar'

const AdminMainContainer = () => {
  const userToken=useSelector(store=>store.user.token)
  
  return (
    // <div className='border  h-screen overflow-x-hidden fixed'>

    //       <AdminNavbar/>
         
    //      <div className='flex border h-full border-black'>
       

    //    {
    //       userToken?
    //       <div className='w-1/6 h-full'>
    //      <Sidebar/>
        
    //       </div>:null
    //        }
          

    //      <div className="w-full">
    //     <Outlet/>
    //     </div> 

    //     </div>
        
        
    // </div>
    <div className="border h-screen overflow-x-hidden fixed w-full">
  <AdminNavbar />

  <div className="flex border h-full border-black">
    {userToken && (
      <div className="w-1/6 h-full">
        <Sidebar />
      </div>
    )}

    <div className="w-full">
      <Outlet />
    </div>
  </div>
</div>
  )
}

export default AdminMainContainer