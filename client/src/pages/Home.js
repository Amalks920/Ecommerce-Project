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
import ImageZoom from "react-image-zooom";


const URL=`${BACKEND_API}/admin/get-all-products`
let history=createBrowserHistory()

 const Home = () => {

  // history.replace('/home')
 let dispatch=useDispatch()
  //access token
  const token=useSelector(store=>store.user.token)
  const products=useSelector(store=>store.products)
  const [isMenFiltered,setIsMenFiltered]=useState(false)
  const [isWomenFiltered,setIsWomenFiltered]=useState(false)
  const [isKidsFiltered,setIsKidsFiltered]=useState(false)
  const [isFiltered,setIsFiltered]=useState(false)


  console.log('productsss')
  console.log(products)

  const [data,setData]=useState([])

  console.log(data)


// useEffect(()=>{
//   dispatch(setProducts(data))

// },[])

  let headers
  if(token){
     headers={
      'Authorization':`Bearer ${token}`
    }
  }

  useEffect(()=>{
    axios.get(URL,{headers})
    .then((res)=>{
      dispatch(setProducts(res.data.products))
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
          <span className='border'>
            <button
            onClick={()=>{
           const filteredData=products.products.filter((product)=>{
                return product.category.category=='Men'
              })
              if(isFiltered){
                setData(products.products) 
                setIsFiltered(false)
              }else{
                setData(filteredData)
                setIsFiltered(true)
              }
              
              
            }}
             className='hover:bg-slate-800 hover:text-white ho px-20 py-1'>Men</button>
            <button 
               onClick={()=>{
                const filteredData=products.products.filter((product)=>{
                     return product.category.category=='Women'
                   })
                   if(isFiltered){
                     setData(products.products) 
                     setIsFiltered(false)
                   }else{
                     setData(filteredData)
                     setIsFiltered(true)
                   }
                   
                   
                 }}
            className='hover:bg-slate-800 hover:text-white px-20 py-1'>Women</button>

            <button
            onClick={()=>{
              const filteredData=products.products.filter((product)=>{
                   return product.category.category=='Kids'
                 })
                 if(isFiltered){
                   setData(products.products) 
                   setIsFiltered(false)
                 }else{
                   setData(filteredData)
                   setIsFiltered(true)
                 }
                 
                 
               }}
            className='hover:bg-slate-800 hover:text-white px-20 py-1'>Kids</button>

               
          </span>
          <Link className="relative left-[20%]">View All Products</Link>
          </div>
         
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


 