import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom';
import store from '../utils/store';


const ProductPage = () => {
    const {id}=useParams()
    const products=useSelector((store)=>{
        return store.products.products[2]
        
    })
   let product=products.filter(products => {
           if(element._id===id) return id===products._id
   });
    
        console.log(product)
    // const products=useSelector(store=>store.products)
    // console.log(products)
    
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage