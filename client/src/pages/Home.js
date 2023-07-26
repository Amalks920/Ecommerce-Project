import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BACKEND_API } from '../utils/constants'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const URL=`${BACKEND_API}/admin/get-all-products`

 const Home = () => {

  //access token
  const token=useSelector(store=>store.user.token)

  const [data,setData]=useState([])

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
       
    })
  .catch((err)=>console.log(err.message))
  },[])


  return (
    <div>
      {
        data.map((el)=>{
          console.log(el)
         return  <ProductCard products={el} />
        })
      }
     
     
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