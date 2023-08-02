import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BACKEND_API } from '../utils/constants'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { setCredentials } from '../utils/loginSlice'
import { Link, useLocation } from 'react-router-dom'
import CarouselTransition from '../components/Carousel'
import { setProducts } from '../utils/productSlice'
import { createBrowserHistory } from 'history'

const URL=`${BACKEND_API}/admin/get-all-products`
let history=createBrowserHistory()

 const Home = () => {

  // history.replace('/home')
 let dispatch=useDispatch()
  //access token
  const token=useSelector(store=>store.user.token)

  const [data,setData]=useState([])

  


useEffect(()=>{
  dispatch(setProducts(data))

})

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
    <div className='border border-x-red-700 mb-[10%] h-screen overflow-x-hidden'>
      <Link to={'/product-page'}>product page</Link>
      <div className=' h-1/2 mt-[1%]'>
        <CarouselTransition />
      </div>
     
      <div className='h-1/2   ms-[10%]  me-[10%] flex flex-col mt-[40%]'>
        
        <div className='  min-1/3 flex justify-center font-sans font-extrabold text-xl'>
          <h1>All Products</h1>
          </div>
          <Link to={'/reg'}>reg</Link>
        <div className=' min-h-fit  flex flex-wrap'>
      {
        data.map((el)=>{
        
         return <ProductCard products={el} />
         
        })
      }
      </div>

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