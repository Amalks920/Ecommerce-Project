import React from 'react'
import UserSidebar from './UserSidebar'
import { Outlet } from 'react-router-dom'

const UserDashBoardContainer = () => {
    return (
        <div className='flex'>
            
            <UserSidebar className="mt-" />
            
            <Outlet />
            
        </div>
      )
}

export default UserDashBoardContainer