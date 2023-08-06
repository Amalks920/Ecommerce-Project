import React, { useEffect, useState } from 'react'
import UserTable from '../../components/UserTable'
import axios from '../../api/axios'
import { useSelector } from 'react-redux'
import { EDIT_ORDER_STATUS,GET_ORDER_API } from '../../utils/constants'




const UpdateOrders = () => {

  const [status,setStatus]=useState();
  console.log(status)
  
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

console.log(orders)

 const getAllOrders=async()=>{

  try {
    const response=await axios.get(GET_ORDER_API,{headers})
    console.log(response)
    
    console.log('e ')
   const data=response?.data?.response
  //  const p=data.map(el=>el.products)
 
   setProduct(data) 
  //  setOrderData(data)
  } catch (error) {
    console.log(error)
  }

 } 

 const editOrderStatus=async(orderId)=>{
    let data={
        orderId:orderId,
        status:status
    }
    try {
        const response=await axios.post(EDIT_ORDER_STATUS,data,{headers})
    } catch (error) {
        
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
      <th className="border border-black p-10">Amount</th>
      <th className="border border-black p-10">Edit</th>
    </tr>
{
  orders.map((el)=>{

    
 
    return <tr className="text-center shadow-lg">
    
     

     
   <td className=" p-10 ">{el._id}</td>

    
  <td className=" p-10 ">email</td>
  <td className=" p-10"></td>
  
  <td className=" p-10">
    <select onChange={(e)=>{
        setStatus(e.target.value)
    }} className='w-[170px] h-[30px] border'>
        <option>none</option>
        <option>pending</option>
        <option>delivered</option>
        <option>cancelled</option>
        <option>processing</option>
    </select>
  </td>

  <td className=" p-10">mobile</td>
  <td className=" p-10">
    <button onClick={()=>{editOrderStatus(el._id)}} className='bg-slate-700  text-white  w-[150px] py-3 text-xl'>Edit</button>
  </td>

 

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

export default UpdateOrders