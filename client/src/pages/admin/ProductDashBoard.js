import React from 'react'
import { Link } from 'react-router-dom'

const ProductDashBoard = () => {
  return (
    <>
    <div className='flex items-center ms-[1.2%] mt-[0.3%] ps-[3%] h-[13%] w-screen fixed shadow-2xl bg-white  rounded-sm'>
        <h1 className='text-2xl font-bold'>PRODUCT DASHBOARD</h1>
    </div>

    <div class="grid grid-cols-2 m-[2%] ms-[3%] mt-[15%] gap-8">
<div className='col-span-1 h-[300px] row-span-6 shadow-2xl text-center pt-[15%] font-bold text-2xl font-serif  rounded-sm'><Link to={'/admin/add-product'}>ADD PRODUCTS</Link></div>
<div className='col-span-1 h-[300px] row-span-6 shadow-2xl text-center pt-[15%] font-bold text-2xl font-serif rounded-sm'><Link to={'/admin/edit-product'}>EDIT PRODUCTS</Link></div>
<div className='col-span-1 h-[300px] row-span-6 shadow-2xl text-center pt-[15%] font-bold text-2xl font-serif rounded-sm'>DELETE PRODUCTS</div>
<div className='col-span-1 h-[300px] row-span-6 shadow-2xl text-center pt-[15%] font-bold text-2xl font-serif  rounded-sm'><Link to={'/admin/view-products'}>VIEW PRODUCTS</Link></div>
</div>
</>
  )
}

export default ProductDashBoard