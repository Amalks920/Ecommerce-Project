import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { Link } from 'react-router-dom'

export const AdminHome = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('admin/get-image')
    .then((res)=>{
      setData(res.data.res)
    }
    )
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (

    <div>
      <Link to={"/admin/user-management"}>User Management</Link>
      {
        data.map((el)=>{
          const base64String=btoa(
            String.fromCharCode(...new Uint8Array((el.img.data.toString('base64'))))
          )
          console.log(el.img.data)
          return  <img src={`data:image/png;base64,${base64String}`}/>

        })
      }
    </div>
  )
}

