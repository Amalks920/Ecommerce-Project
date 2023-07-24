import React, { useEffect, useState } from 'react'
import UserTable from '../../components/UserTable'
import axios from '../../api/axios'
const GET_USER_API='/admin/get-all-users'

const UserManagement = () => {
    const [userData,setUserData]=useState([])

    console.log(userData);
   useEffect(()=>{

    axios.get(GET_USER_API)
    .then((res)=>{
      setUserData(res.data.users)
        
    })
    .catch((err)=>{
        console.log(err);
    })

},[])

    


  return (
    <div>
    <table className="table-auto mt-20 w-3/4 ml-60  shadow-2xl rounded-md">
    <thead>
      <tr className="text-white bg-black shadow-lg rounded-xl">
        <th className="p-10 ">
        <input  id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
  
        </th>
        <th className="border border-black p-10">User Name</th>
        <th className="border border-black p-10">Email Id</th>
        <th className="border border-black p-10">Phone Number</th>
        <th className="border border-black p-10">Current Status</th>
        <th className="border border-black p-10">ACTIONS</th>
      </tr>
    </thead>
    <tbody>

              {userData?.map((el)=>{
               return <UserTable users={el} />
              })}  
             
       
     
    </tbody>
  </table>

  





  </div>
  )
}

export default UserManagement