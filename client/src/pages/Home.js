import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BACKEND_API } from '../utils/constants'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { setCredentials } from '../utils/loginSlice'
import { Link, useLocation } from 'react-router-dom'
const URL=`${BACKEND_API}/admin/get-all-products`

 const Home = () => {
 let dispatch=useDispatch()
  //access token
  const token=useSelector(store=>store.user.token)

  const [data,setData]=useState([])

  


// useEffect(()=>{

//   dispatch(setCredentials({username:"username",token:token}))
// })

  let headers
  if(token){
     headers={
      'Authorization':`Bearer ${token}`
    }
  }

  useEffect(()=>{
    axios.get(URL,{headers})
    .then((res)=>{

      setData(res.data.products)
       
    },[])
  .catch((err)=>console.log(err.message))
  },[])


  return (
    <div>
      <div>
      <Link to={'/reg'}>REg</Link>
      {
        data.map((el)=>{
          console.log(el)
         return  <ProductCard products={el} />
        })
      }
      </div>
     
     
    </div>
  )
}

export default Home

 /* {
        data.map((singleData)=>{
          const base64String=btoa(
            String.fromCharCode(...new Uint8Array(()))
          )
        })
      } */