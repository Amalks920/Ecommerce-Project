import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'

const AdminMainContainer = () => {
  return (
    <div>
      
        <Navbar />
        <div className="flex">
          <Sidebar/>
        <Outlet />
        </div>
    </div>
  )
}

export default AdminMainContainer