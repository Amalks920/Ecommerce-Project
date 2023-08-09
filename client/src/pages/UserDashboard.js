import React, { useState } from 'react'
import UserSidebar from '../components/UserSidebar'
import axios from '../api/axios'
import { useSelector } from 'react-redux'

const ADD_ADDRESS='/user/add-address'




const UserDashboard = () => {
  //state variables
  const [firstname,setFirstname]=useState('')
  const [secondname,setSecondname]=useState('') 
  const [city,setCity]=useState('')
  const [state,setState]=useState('')
  const [pincode,setPincode]=useState()
  const [date,setDate]=useState()
  const [address,setAddress]=useState('')
  const [mobile,setMobile]=useState()
  const [email,setEmail]=useState('')

let token=useSelector(store=>store.user.token)
let userId=useSelector(store=>store.user.id)




  let headers;
if (token) {
  headers = {
    Authorization: `Bearer ${token}`,
  };
}

let data={
  firstname:firstname,
  lastname:secondname,
  city:city,
  state:state,
  pincode:pincode,
  DOB:date,
  address:address,
  mobile:mobile,
  email:email,
  user:userId
}

      const addAddress=async(e)=>{
        e.preventDefault()
        await axios.post(ADD_ADDRESS,data,{headers})
      }

  return (
    <div className='border  flex h-fit ms-[20%] mt-[5%]'>
     
      <div className='mt-[6%] mb-14 me-8  text-white w-full'>
      
        <div className='h-screen w-2/3 ms-[17%] m-5 p-10 shadow-2xl'>
        <h1 className='text-black text-center text-2xl font-serif mb-3 font-bold shadow-2xl'>ADDRESS</h1>
          <div className=' w-full h-full '>
            

            <form className='flex  flex-wrap'>
            <div className="p-4 mt-4 w-1/3 border shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            First Name
          </label>
          <input
            onChange={(e)=>{setFirstname(e.target.value)}}
            name="firstname"
            className="w-full appearance-none block m bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="First Name"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Last Name
          </label>
          <input
          onChange={(e)=>{setSecondname(e.target.value)}}
            name="lastname"
            className="w-full appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Last Name"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            City/District/Town
          </label>
          <input
          onChange={(e)=>{setCity(e.target.value)}}
            name="city"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="City/District/Towns"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            State
          </label>
          <select
              onChange={(e)=>{setState(e.target.value)}}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="size">
              <option value="Kerala">Kerala</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Assam">Assam</option>
            </select>
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Pincode
          </label>
          <input
            onChange={(e)=>{setPincode(e.target.value)}}
            name="pincode"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="number"
            placeholder="pincode"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Date Of Birth
          </label>
          <input
          onChange={(e)=>{setDate(e.target.value)}}
            name="dateofbirth"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="date"
            placeholder="Date Of Birth"
          />
            </div>

            <div className="p-4 mt-4 w-full border h-[200px]">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Address
          </label>
          <textarea
          onChange={(e)=>{setAddress(e.target.value)}}
            name="address"
            className="w-full h-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Address"
          />
            </div>

            <h1 className='text-black w-full mt-14 text-center text-2xl font-serif mb-3 font-bold border shadow-2xl'>CONTACT INFORMATION</h1>
            
            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Mobile number
          </label>
          <input
            onChange={(e)=>{setMobile(e.target.value)}}
            name="mobilenumber"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="number"
            placeholder="Mobile Number"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            E-Mail
          </label>
          <input
          onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            className="w-full appearance-none block  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="abc@gmail.com"
          />
            </div>

            <div className="p-4 mt-4 w-1/3 shadow-2xl">
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
            
            <button onClick={
              addAddress
            } className="bg-blue-900 ms-auto me-6 mt-40 p-[1%] rounded-xl text-white">
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