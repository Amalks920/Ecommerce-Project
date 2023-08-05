import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../utils/loginSlice'
import useAuth from '../hooks/useAuth'

const ForgotPasswordOtp = () => {
  const [otp,setOtp]=useState()
  let dispatch=useDispatch()
  let navigate=useNavigate()
  const {setAuth}=useAuth()

  const sendOtp=async(e)=>{
    e.preventDefault()
    try {
     const response= await axios.post('/user/otp',{otp:otp})

     if(response?.data.accessToken){
        navigate('/create-new-password')
     }
    
     console.log(response)
   
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
           Verify OTP
        </h1>
        <form onSubmit={sendOtp}  className="mt-6">
            <div className="mb-2">
                
              
                        <>
                        <label
                    htmlFor="otp"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Enter OTP
                </label>
                <input
                    onChange={(e)=>{setOtp(e.target.value)}}
                    value={otp}
                    type="number"                   
                    id='otp'                   
                    required
                    className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <button type='submit' className="mt-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Enter OTP
                </button>
                </>
                    


            </div>
         
           
        </form>
        <div className="mt-6">
               
            </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link to={'/signup'}
                
                className="font-medium text-purple-600 hover:underline"
            >
                Sign up
            </Link>
        </p>
    </div>
</div>
  )
}

export default ForgotPasswordOtp