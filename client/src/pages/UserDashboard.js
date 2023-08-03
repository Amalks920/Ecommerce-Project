import React from 'react'
import UserSidebar from '../components/UserSidebar'

const UserDashboard = () => {
  return (
    <div className='border w-full  flex h-full'>
      <div className='w-full   '>
      <UserSidebar />
      </div>
      <div className='mt-[6%] ms-[-1400px] mb-14 me-8  text-white w-full'>
      
        <div className='h-screen m-5 p-10 shadow-2xl'>
        <h1 className='text-black text-center text-3xl font-serif mb-3 font-bold'>ADDRESS</h1>
          <div className=' w-full h-full '>
            

            <form className='flex  flex-wrap'>
            <div className="p-4 mt-4 w-1/3 border">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            First Name
          </label>
          <input
            name="firstname"
            className="w-full appearance-none block m bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="First Name"
          />
            </div>

            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Date Of Birth
          </label>
          <input
            name="dateofbirth"
            className="w-full appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="date"
            placeholder="Last Name"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 ">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            City/District/Town
          </label>
          <input
            name="city"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="City/District/Towns"
          />
            </div>

            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            State
          </label>
          <select
              
              
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="size">
              <option value="xl">Kerala</option>
              <option value="2xl">Tamil Nadu</option>
              <option value="xxl">Karnataka</option>
              <option value="xxl">Assam</option>
            </select>
            </div>

            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Pincode
          </label>
          <input
            name="pincode"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="number"
            placeholder="pincode"
          />
            </div>

            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            
          </label>
          <input
            name="productname"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Product Name"
          />
            </div>

            <div className="p-4 mt-4 w-full border h-[200px]">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Address
          </label>
          <textarea
            name="address"
            className="w-full h-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Address"
          />
            </div>

            <h1 className='text-black w-full mt-14 text-center text-3xl font-serif mb-3 font-bold border'>CONTACT INFORMATION</h1>
            
            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Mobile number
          </label>
          <input
            name="mobilenumber"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="number"
            placeholder="Mobile Number"
          />
            </div>

            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            E-Mail
          </label>
          <input
            name="email"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="abc@gmail.com"
          />
            </div>

            <div className="p-4 mt-4 w-1/3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Alternative Number
          </label>
          <input
            name="alternativenumber"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="number"
            placeholder="Product Name"
          />
            </div>
            
            <button className="bg-blue-900 ms-auto me-6 mt-40 p-[1%] rounded-xl text-white">
              Add Product
            </button>
           
             
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard