import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
import { set } from 'react-hook-form'



const UserTable = (props) => {
  const [blockButton,setBlockButton]=useState(true)
console.log('props.users');
const {name,email,mobile,isBlocked,_id}=props.users
// const BLOCK_USER_API=`/admin/block-user/${_id}`
// const UNBLOCK_USER_API=`/admin/unblock-user/${_id}`
const BLOCK_USER_API=`/admin/block-user/${_id}`
const UNBLOCK_USER_API=`/admin/unblock-user/${_id}`

const blockUser=()=>{
  axios.put(BLOCK_USER_API)
  .then((res)=>{
    setBlockButton(true)
    console.log(res.data.message);
  })
  .catch((err)=>{
    console.log(err.message);
  })
}

const unBlockUser=()=>{
  axios.put(UNBLOCK_USER_API)
  .then((res)=>{
    setBlockButton(res.data.message)
    console.log(res.data.message);
  })
  .catch((err)=>{
    console.log(err.message);
  })
}
   
  return (
    <tr className="text-center shadow-lg">
    <td className="p-10">
    <input  id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

    </td>
  <td className=" p-10 ">{name}</td>
  
  <td className=" p-10 ">{email}</td>
  <td className=" p-10">{mobile}</td>
  <td className=" p-10 ">{isBlocked && <p className='text-green-500'>Not Blocked</p>}</td>
  <td className=" p-10  flex justify-between">


   {blockButton ?(
     <button onClick={blockUser} className="bg-transparent border border-red-600 ms-20 p-3 w-1/2 me-5 rounded-lg shadow-lg text-red-600">Block User</button>
   ):<button onClick={unBlockUser} className="bg-transparent border border-green-600 ms-20 p-3 w-1/2 me-5 rounded-lg shadow-lg text-green-600">Unblock User</button>
    }

   
  </td>

</tr>
  )
}

export default UserTable