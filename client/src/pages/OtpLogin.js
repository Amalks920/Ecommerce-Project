

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios'

const OtpLogin = () => {
    const [email,setEmailId]=useState('')
    const [otp,setOtp]=useState('')
    const [userOtp,setUserOtp]=useState('')
    const [otpInput,setOtpInput]=useState(false)
    console.log(email)
    
    const sendOtp=(e)=>{
        e.preventDefault()
        axios.post('/user/otp-verification-gmail',{userEmail:email})
        .then((res)=>{
            console.log(res)
            setOtp(res.data.otp)
            setEmailId('')
            setOtpInput(true)
           
        })
        .catch((err)=>{
            
            console.log(err)
        })
        
    }
    console.log(userOtp+"user")
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
           Sign in
        </h1>
        <form onSubmit={sendOtp}  className="mt-6">
            <div className="mb-2">
                
                {
                    !otpInput?(
                        <>
                        <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Enter Email Id
                </label>
                <input
                    
                    type="email"
                    value={email}
                    id='email'
                    onChange={
                        (e)=>{setEmailId(e.target.value)}
                    }
                    required
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                </>
                    ):
                    (
                        <>
                        <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Enter OTP
                    </label>
                        <input
                            
                            type="text"
                            id='otp'
                            value={userOtp}
                            onChange={
                                (e)=>{setUserOtp(e.target.value)}
                            }
                            required
                            className=" block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </>
                            )

}
            </div>
            
            <a
                href="#"
                className="text-xs text-purple-600 hover:underline"
            >
                Forget Password?
            </a>
            {
                
            
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Enter Email
                </button>

            }
           
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

export default OtpLogin