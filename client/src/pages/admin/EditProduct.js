import React, { createRef, useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import axios from '../../api/axios'
import { useLocation } from 'react-router-dom'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const EditProduct = () => {
  const location=useLocation()
  const {id}=useParams()
  const token=useSelector(store=>store.user.token)
  const navigate=useNavigate()
  // const {from}=location.state
  // const id=from.props.products._id
  console.log('idddddd')
  console.log(console.log(id));
  

 
  const EDIT_URL=`admin/update-product/${id}`
  
  let headers;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }
 

    const editProduct=(e)=>{

    e.preventDefault()
    const formData=new FormData()
  
    let data={
      productName:productname,
      brandName:brandname,
      description:description,
      stockQuantity:stockQuantiy,
      size:selectedSize,
      price:price,
      id:id
      
     }

Object.keys(data).forEach(key => {
  formData.append(key, data[key]);
});

axios.put(EDIT_URL,data,{headers})
.then((res)=>{
    // dispatch(setProductDetails(res.data))
   console.log(res.data)
   navigate('/admin/view-products')
})
.catch((err)=>{
    // dispatch(setProductDetailsError(err.message))
    console.log(err)
})
 }

    
        const fileInput=createRef()
        const fileInput2=createRef()
        const fileInput3=createRef()

    const [productname,setProductName]=useState('')
    const [brandname,setBrandName]=useState('')
    const [category,setCategory]=useState('')
    const [description,setDescription]=useState();
    const [stockQuantiy,setStockQuantity]=useState();
    const [selectedSize,setSelectedSize]=useState();
    const [subCategory,setSubCategory]=useState()
    const [price,setPrice]=useState();
    
    console.log(fileInput,fileInput2,fileInput3)
  return (
    <>
    <div className="flex justify-left ps-8 font-bold text-lg ms-[15%] items-center h-[15%] shadow-xl">
        <h1 className="text-2xl">EDIT A PRODUCT</h1>
      </div>
    <form className='' onSubmit={editProduct}>
    <div className='flex justify-evenly w-screen h-screen items-center'>
       
        <div className='border border-black w-1/2  text-center mx-[5%] ms-[10%]'>
            
        {/* <div className="mb-3">
      <label
        htmlFor="formFile"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        Default file input example
      </label>
      <input
        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="formFile"
      />
    </div>  */}
     <div class="flex items-center justify-center ms-[5%]">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" ref={fileInput} class="hidden" />
    </label>
</div>  

<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" ref={fileInput2} class="hidden" />
    </label>
</div>  

<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" ref={fileInput3} type="file" class="hidden" />
    </label>
</div>  

        </div>

        <div className='border border-black w-1/2 text-center justify-center'>
            <div className='flex flex-col items-center mt-36'>
      
            <div className='flex w-2/3   items-center'>
      <div className="mb-6 w-1/2 items-center pe-2">
        <label htmlFor="productname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Product Name</label>
        <input type="name" value={productname} onChange={(e)=>{setProductName(e.target.value)}}  id="productname" className=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>

      <div className="mb-6 w-1/2 items-center pe-2">
        <label htmlFor="brandname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Brand Name</label>
        <input onChange={(e)=>{setBrandName(e.target.value)}} value={brandname} type="name" id="brandname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
    
      </div>

   
     

      <div className='flex w-2/3 flex-col  items-center'>
     
<label for="message" class="block mb-2 text-sm font-medium text-black dark:text-white">Your message</label>
<textarea onChange={(e)=>{setDescription(e.target.value)}} value={description} id="message" rows="4" class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here..."></textarea>

      </div>

      <div className="flex flex-wrap -mx-3 mb-2 mt-8">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-city">
        Stock Quantity
      </label>
      <input onChange={(e)=>{setStockQuantity(e.target.value)}} value={stockQuantiy}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Quantity" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
        Size
      </label>
      <div className="relative">
        <select onChange={(e)=>{setSelectedSize(e.target.value)}} value={selectedSize}  className="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="size">
          <option value="xl">xl</option>
          <option value="2xl">2xl</option>
          <option value="xxl">xxl</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-zip">
        price
      </label>
      <input onChange={(e)=>{setPrice(e.target.value)}} value={price}  className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " id="price" type="number" placeholder="90210" />
    </div>
  </div>
  <button type='submit' className='bg-slate-700 w-1/4 h-12 rounded-md mt-5 text-white'>Edit PRODUCT</button>

    </div>

        </div>

      
    </div>

</form>

 <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>  
</>
  )
}

export default EditProduct