import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { GET_ADDRESS,GET_CART } from '../utils/constants'
import { deleteCart } from '../utils/cartSlice'






const PLACE_ORDER_URL='/user/place-order'


const OrderPage = () => {


  const paymentRef=useRef()
  console.log(paymentRef)
const userId=useSelector(store=>store.user.id)
const navigate=useNavigate()
const dispatch=useDispatch()
const token=useSelector(store=>store.user.token)
const cart=useSelector(store=>store.cart)
const [address,setAddress]=useState('')
const [cartData,setCartData]=useState([])
const [paymentInput,setPaymentInput]=useState('')


let headers;
if (token) {
  headers = {
    Authorization: `Bearer ${token}`,
  };
}


  let data={
    user:userId
    
  }



  //get address
 
  const totalAmount=cartData.map(el=>el.productId.price*el.count).reduce((total,element)=>total+element,0)


  const getAddress=async()=>{
    try {
      const response=await axios.get(`http://localhost:5000/api${GET_ADDRESS}/${userId}`,{headers})
      setAddress(response.data.address[0])
     
      
    } catch (error) {
      console.log(error)
    }
  }

  const placeOrder=async()=>{
    try {
     const response=await axios.post(PLACE_ORDER_URL,data,{headers})
     console.log(response)
     dispatch(deleteCart())
     navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const getCartDetails = async () => {
    try {
      const result = await axios.post(
        GET_CART,
        { userid: userId },
        { headers }
      );
     
      setCartData(result.data.cart)
    } catch (error) {
      console.log(error);
    }
  };

   const paymentNavigateHandler=()=>{
   
    paymentInput==="PREPAID" && navigate('/prepaid-payment')

}



  useEffect(()=>{
    getCartDetails()
    getAddress()
  },[])
  

  
  return (
    <div className=' h-fit p-[1%] pt-[8%]'>
        <div className=' border h-full'>
        <div className="grid grid-cols-2 ms-[4%] shadow-2xl h-full">
          <div className='flex flex-col m-[5%]'>
            <div className='h-[35%]   bg-slate-300  w-full  p-[5%] shadow-2xl'>
            <h1 className='text-2xl'>DELIVERY ADDRESS</h1>
            <h2 className='text-xl mt-3 font-bold'>Home</h2>
            <p>{`${address.firstname} ${address.lastname}`}</p>
            <p>{`${address.address} ${address.city}`}</p>
            <p>{`PIN : ${address.pincode}`}</p>
            <p>{`${address.state}`}</p>
            <p>{`${address.mobile}`}</p>
            <Link className='text-blue-700 absolute left-[700px] top-[300px]'>Change Your Delivery Address</Link>
            </div>


         
            <div className='h-fit mt-7  flex flex-col shadow-2xl'>
            {
             cartData?.map((el)=>{

           
            return  <div className='w-full h-[300px] border-b-2 border-b-slate-600  p-[5%] '>
              <div className='h-[75%] flex  '>
              <img className='' src={el?.productId?.image} />

              <div className='w-[50%]'>
              <p className='ms-3 uppercase text-xl  font-thin'>{el?.productId?.productName}</p>
              <p className='ms-3 mt-5 font-serif'>{el?.productId?.description}</p>
              </div>

              <div className='ms-[8%] mt-[5%] font-mono'>{el?.count} Nos</div>
              <div className='ms-[9%] mt-[5%] text-green-600 text-2xl font-mono'><h1>{el?.productId?.price} RS</h1></div>

              </div>

              <div className=' h-[40%] flex justify-center items-center'>
                
                <h1><span className=' text-2xl font-thin'>Total : </span>{el?.productId.price*el?.count}<span className='text-3xl text-slate-700 font-mono'> RS</span></h1>
              </div>
            </div>
            
             })  
          }  
          <div className='h-[100px] justify-center flex  items-center'><p className='font-mono text-2xl'>Total Amount :{totalAmount}</p></div>
             </div>         
            
        
                

           
             
           

          </div>
 
          <div className='w-[50%] mt-[10%] ms-[10%] h-[300px] flex flex-col justify-center items-center shadow-2xl'>
            <h1 className='text-2xl font-bold mb-[20%]'>Select Payment Method</h1>
              <select onChange={(e)=>{setPaymentInput(e.target.value)}}   className='w-[60%] h-[15%]'>
                <option>none</option>
                <option>COD</option>
                <option>PREPAID</option>
                <option>UPI</option>

              </select>
              <button 
              
               onClick={
                ()=>{
                paymentNavigateHandler()
                }
               } className='absolute bg-slate-700 w-[10%] h-[5%] left-[64%] text-white font-bold text-xl top-[60%]'>Pay</button> 


          </div>
</div>
        </div>
           
    </div>
  
  )
}

export default OrderPage