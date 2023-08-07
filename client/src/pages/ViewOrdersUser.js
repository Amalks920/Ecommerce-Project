import React, { useEffect } from 'react'
import axios from '../api/axios'
import { useSelector } from 'react-redux'
import { GET_A_ORDER } from '../utils/constants'

const ViewOrdersUser = () => {
    const userid=useSelector(store=>store.user.id)
    console.log(userid)
    useEffect(()=>{

        getOrders()
        
    },[])

    const getOrders=async ()=>{
        try {
            const response=await axios.get(`${GET_A_ORDER}/${userid}`)
            console.log(response)

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

            <div className='border mb-[3%] border-black h-[300px]'>

            </div>

            <div className='border border-black h-[300px]'>

            </div>

        </div>

    


    </div>
  )
}

export default ViewOrdersUser