import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const ViewAllProducts = () => {
const products=useSelector(store=>store.products)
console.log(products.products)
  return (
    <div className='flex mt-[5.5%]'>

        <div className='w-1/4 border'></div>

    <div className='h-screen flex flex-wrap mt-[5%]'>

        {
            products.products.products.map((el)=>{

            
           return  <ProductCard products={el} />
        })
        }
        
    </div>
    </div>
  )
}

export default ViewAllProducts