import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { useSelector } from 'react-redux'
import { GET_A_ORDER } from '../utils/constants'
import { setProducts } from '../utils/productSlice'
import { map } from 'lodash'

const ViewOrdersUser = () => {
    const userid=useSelector(store=>store.user.id)
    const products=useSelector(store=>store.products)
    const [productData,setProductData]=useState([])
    const [data,setData]=useState([])
    console.log(userid)
    console.log(products)
    console.log(productData)


   const p1=products.products.map(el=>el)
   const p2=productData.map(el=>el.productId)

   const productsToDisplay=p1.filter((element)=>p2.includes(element._id))
   console.log('p')
   console.log(productsToDisplay)


    

    useEffect(()=>{

        getOrders()
        
    },[])

    const getOrders=async ()=>{
        try {
            const response=await axios.get(`${GET_A_ORDER}/${userid}`)
            console.log('respponsef');
            console.log(response.data.response)
            setProductData(response.data.response.items)

        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div className='w-[80%] ms-[17%] h-fit border border-black pt-[10%] p-[5%]'>
        <div className='p-[3%]  w-full h-fit shadow-2xl'>
            <div className=' mb-[6%] flex flex-col'>
                <h1 className='text-3xl font-bold'>My Purchases</h1>
                <div className='mt-[3%] flex border h-[100px]'>
                    
                </div>
            </div>

            <div className='border mb-[3%] h-fit'>
                {
                    productsToDisplay.map((el)=>{
                        return <div className='h-1/2 flex   p-[2%] shadow-2xl'>
                                <img src={el.image} width={100} />
                                <div className='ms-4 mt-1 w-[70%]'>
                                <h1 className="font-bold text-2xl ">{el.productName}</h1>
                                <p className='mt-2'>{el.description}</p>
                                <p>QTY : {productsToDisplay.length}</p>
                                </div>
                                <div className='border ms-[60%] w-[30%]'>
                                    <h1 className='mt-[50px] text-center text-2xl text-green-700'>${el.price}</h1>
                                </div>
                        </div>
                    })
                    
                }
               
            </div>

          

        </div>

    


    </div>
  )
}

export default ViewOrdersUser