import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
const DELETE_URL='admin/delete-a-product'


 const TableRows=(props)=> {
    console.log('prrroops');
      console.log(props?.products);
      const {_id,productName,stockQuantity,price,category}=props?.products

      console.log(_id)
      const deleteProduct=(id)=>{
       axios.delete(`${DELETE_URL}/${id}`)
       .then((res)=>{
        console.log(res)
       })
       .catch((err)=>{
        console.log(err)
       })
      }

      
      
    return (
      <>


      


        <tr className="text-center shadow-lg">
          <td className="p-10">
          <input  id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

          </td>
        <td className=" p-10 ">Malcolm Lockyer</td>
        <td className=" p-10 ">{productName}</td>
        <td className=" p-10 ">{stockQuantity}</td>
        <td className=" p-10">{price}</td>
        <td className=" p-10 ">{category}</td>
        <td className=" p-10  flex justify-between">
         <button className="bg-transparent border border-red-600 p-3 w-1/2 me-5 rounded-lg shadow-lg text-red-600"><Link to={'/edit-product'} state={{from:{props}}}>Edit</Link> </button>
          <button onClick={()=>{
            console.log(productName)
             deleteProduct(_id)
          }
          } className="border border-red-600 p-3 w-1/2 ms-5 rounded-lg shadow-lg text-green-600 
          " type="button">Delete</button>
        </td>

      </tr>
      

      



      </>
    )
}


export default TableRows

