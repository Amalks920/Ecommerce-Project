import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { useSelector } from 'react-redux'
const ADD_CATEGORY_API='/admin/add-category'

const AddCategory = () => {
  const token=useSelector(store=>store.user.token)
  console.log(token)

    const [category,setCategory]=useState('')
    const [subCategory1,setSubCategory1]=useState('')
    const [subCategory2,setSubCategory2]=useState('')



    let data={
      category:category,
      subCategory1:subCategory1,
      subCategory2:subCategory2
    }

    let headers
    if(token){
       headers={
        'Authorization':`Bearer ${token}`
      }
    }


    const sendCategory=async(e)=>{
      e.preventDefault()
      try {
       const response=await axios.post(ADD_CATEGORY_API,data,{headers})
        console.log(response)
      } catch (error) {
        console.log(error)
      }
        
    }

  return (
    <form onSubmit={sendCategory}>
    <div className='h-screen'>
    <div class="grid grid-cols-4 min-h-[10%]   ms-[2%] ">
  <div className='col-span-4 border h-full shadow-2xl text-2xl font-bold flex items-center ps-[5%]'>ADD CATEGORY</div>
</div>

<div className='grid grid-cols-4 min-h-[30%]  w-[50%] mt-[5%] shadow-2xl ms-[25%]'>
  <div className='col-span-4  p-[5%] '>
    <h1 className=' text-2xl text-center  font-bold'>CATEGORY</h1>
    <div className='mt-[5%]'>
    <label className=''>category</label>
    <input value={category}  onChange={(e)=>{setCategory(e.target.value)}} type="text" id="last_name" className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border border-black" placeholder="Category" required />
    </div>
    <div className='mt-[5%]'>
    <label className=''>subcategory-1</label>
    <input value={subCategory1}  onChange={(e)=>{setSubCategory1(e.target.value)}} type="text" id="last_name" className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border border-black" placeholder="Category" required />
    </div>
    <div className='mt-[5%]'>
    <label className=''>subcategory-2</label>
    <input value={subCategory2}  onChange={(e)=>{setSubCategory2(e.target.value)}} type="text" id="last_name" className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border border-black" placeholder="Category" required />
    </div>
    <button className='bg-slate-600  ms-[40%] p-[2%] px-[6%] mt-[5%] text-white rounded-xl'>ADD</button>
   
  </div>
</div>

</div>
</form>
  )
}

export default AddCategory