import React, { useEffect, useState } from 'react'
import UserTable from '../../components/UserTable'
import axios from '../../api/axios'
import { useSelector } from 'react-redux'
const GET_ORDER_API='/admin/get-all-orders'



const ViewOrder = () => {
  
  const [orders,setProduct]=useState([])
  let token=useSelector(store=>store.user.token)
  let headers
  if(token){
     headers={
      'Authorization':`Bearer ${token}`
    }
  }


useEffect(()=>{
    getAllOrders()
},[])



 const getAllOrders=async()=>{

  try {
    const response=await axios.get(GET_ORDER_API,{headers})
    
   
   const data=response?.data?.response
  //  const p=data.map(el=>el.products)
  console.log(data)
   setProduct(data) 
  //  setOrderData(data)
  } catch (error) {
    console.log(error)
  }

 } 





  return (
    <div>
    <div className="flex justify-left ps-[4%] font-bold text-lg  items-center h-[120px] shadow-xl">
      <h1 className="text-2xl">VIEW PRODUCT</h1>
    </div>
  <table className="table-auto mt-20 w-3/4 ml-60  shadow-2xl rounded-md">
  <thead>
    <tr className="text-white bg-black shadow-lg rounded-xl">
    
      
      
      <th className="border border-black p-10">Order</th>
      <th className="border border-black p-10">Date</th>
      <th className="border border-black p-10">Ship To</th>
      <th className="border border-black p-10">Status</th>
      <th className="border border-black p-10">Total Amount</th>
    </tr>
{
  orders.map((el)=>{

 
    return <tr className="text-center shadow-lg">
    
     

     
   <td className=" p-10 ">{el._id}</td>

    
  <td className=" p-10 ">email</td>
  <td className=" p-10">{el.address.city}</td>
  
  <td className=" p-10">
    <button className='bg-green-400 px-10 text-green-700 py-1 rounded-full'>{el.orderStatus}</button>
  </td>

  <td className=" p-10 ">{el.items.reduce((total,ele)=>{
      return ele.quantity*ele.price+total
  },0)}</td>

  
    
     
     
     
     

      
  
    

 

    </tr>
     })
}

  </thead>
  <tbody>
 
  </tbody>
</table>







</div>
  )
}

export default ViewOrder