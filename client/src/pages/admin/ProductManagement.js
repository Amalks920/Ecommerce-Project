import React, { useEffect, useState } from 'react'
import TableRows from '../../components/TableRows'
import axios from '../../api/axios'
const GET_PRODUCTS='admin/get-all-products'

const ProductManagement = () => {
    const [products,setProducts]=useState([])
console.log(products);
    useEffect(()=>{
        axios.get(GET_PRODUCTS)
        .then((res)=>{
            console.log(res.data.products)
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err)

           
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
        <th className="border border-black p-10">IMAGE</th>
        <th className="border border-black p-10">PRODUCT NAME</th>
        <th className="border border-black p-10">STOCK</th>
        <th className="border border-black p-10">PRICE</th>
        <th className="border border-black p-10">CATEGORY</th>
        <th className="border border-black p-10">ACTIONS</th>
      </tr>
    </thead>
    <tbody>
       {
        products?.map((el)=>{
                
            return <TableRows products={el} />
        })
       }
    
     
    </tbody>
  </table>

  





  </div>

  )
}

export default ProductManagement