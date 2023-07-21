import React, { createRef, useState } from 'react'
import {BACKEND_API} from '../../utils/constants'
import axios from 'axios';

const AddProduct = () => {
const fileInput=createRef()
const fileInput2=createRef()
const fileInput3=createRef()

const [productName,setProductName]=useState('');
const [brandName,setBrandName]=useState();
const [category,setCateory]=useState();
const [subCategory,setSubCategory]=useState();
const [description,setDescription]=useState();
const [stockQuantiy,setStockQuantity]=useState();
const [selectedSize,setSelectedSize]=useState();

const [price,setPrice]=useState();
const [file1,setFiles1]=useState();
const [file2,setFiles2]=useState();
const [file3,setFiles3]=useState();

console.log(file3)

let URL=`${BACKEND_API}/admin/add-product`


const sendProductDeatails=(e)=>{

  e.preventDefault()
  const formData=new FormData()

  let data={
    productName:productName,
    brandName:brandName,
    category:category,
    subCategory:subCategory,
    description:description,
    stockQuantity:stockQuantiy,
    size:selectedSize,
    price:price,
    
   }
  


  


formData.set('file1',fileInput.current.files[0])
formData.set('file2',fileInput2.current.files[0])
formData.set('file3',fileInput3.current.files[0])

Object.keys(data).forEach(key => {
  formData.append(key, data[key]);
})

  axios.post(URL,formData)
  .then((res)=>{
      // dispatch(setProductDetails(res.data))
     console.log(res.data)
  })
  .catch((err)=>{
      // dispatch(setProductDetailsError(err.message))
      console.log(err)
  })
}


  return (
    
<div className='w-screen h-screen flex  justify-center'>
<form onSubmit={sendProductDeatails} className="w-full mt-44 max-w-lg" encType="multipart/form-data">
    <h1 className='text-center mb-16 font-bold'>ADD PRODUCT</h1>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Product Name
      </label>
      <input name="productname" onChange={(e)=>{setProductName(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-name" type="text" placeholder="Product Name" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Brand Name
      </label>
      <input name='brandname' onChange={(e)=>{setBrandName(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-brand-name" type="text" placeholder="Brand Name" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Category
      </label>
      <input onChange={(e)=>{setCateory(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-category-name" type="text" placeholder="Category" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Sub Category
      </label>
      <input onChange={(e)=>{setSubCategory(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subcategory-name" type="text" placeholder="Sub Category" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Description
      </label>
      <input onChange={(e)=>{setDescription(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="description" placeholder="Description" />
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        Stock Quantity
      </label>
      <input onChange={(e)=>{setStockQuantity(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Quantity" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Size
      </label>
      <div className="relative">
        <select value={selectedSize} onChange={(e)=>{setSelectedSize(e.target.value)}} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="size">
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
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        price
      </label>
      <input  onChange={(e)=>{setPrice(e.target.value)}}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="text" placeholder="90210" />
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mt-8 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        first image
      </label>
      <input name="file1" ref={fileInput}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        second image
      </label>
      <input  name="file2" ref={fileInput2}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input2" type="file"></input>
    </div>
    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        third image
      </label>
      <input  name="file3" ref={fileInput3}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
    </div>
  </div>
  <div className='flex justify-center mt-20 h-1/6'>
      <button type='submit' className='bg-slate-700 w-1/3 h-1/3 rounded-md text-white'>ADD PRODUCT</button>
    </div>
</form>

</div>

  )
}

export default AddProduct