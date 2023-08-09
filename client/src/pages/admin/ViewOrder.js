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
    <div className='h-fit mt-[15%]'>
   
  <table className="table-auto mt-20 w-3/4 ml-60  shadow-2xl rounded-md">
  <thead>
    <tr className="text-white bg-black shadow-lg rounded-xl">
    
      
      
      <th className=" p-10">Order Id</th>
      <th className=" p-10">Payment Mode</th>
      <th className=" p-10">Ship To</th>
      <th className=" p-10">Status</th>
      <th className=" p-10">Total Amount</th>
    </tr>
{
  orders.map((el)=>{

 
    return <tr className="text-center shadow-lg">
    
     

     
   <td className=" p-10 ">#{el._id}</td>

    
  <td className=" p-10 ">{el.paymentMode}</td>
  <td className=" p-10">{el.address.city}</td>
  
  <td className=" p-10">
    {el.orderStatus==="pending" &&<button className='bg-yellow-400 px-10 text-yellow-700 py-1 rounded-full'>{el.orderStatus}</button>}
    {el.orderStatus==="cancelled" &&<button className='bg-red-400 px-10 text-red-700 py-1 rounded-full'>{el.orderStatus}</button>}

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