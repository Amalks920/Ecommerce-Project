import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import store from '../utils/store';
import axios from '../api/axios'
import { BACKEND_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Signup } from './Signup';
import Home from './Home';
import { setCredentials } from '../utils/loginSlice';

const LOGIN_URL='/user/login'


console.log('user here');

export  const Login = () => {



    const user=useSelector(store=>store.user)
    //subscribing to login slice
  

    const {setAuth}=useAuth();
    let dispatch=useDispatch()

    const userRef=useRef()
    const errRef=useRef()
    const navigate=useNavigate()
    const location=useLocation()
    const from=location;
 


    const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [errMsg,setErrMsg]=useState('')

console.log(email,password)
useEffect(()=>{
    userRef.current.focus();
},[])

useEffect(()=>{
    setErrMsg('')
},[email,password])


const handleSubmit=async (e)=>{
    e.preventDefault();

    try {
        
        const response=await axios.post(LOGIN_URL,
            JSON.stringify({email:email,password:password}),
            {
                headers:{'Content-Type':'application/json'},
                withCredentials:false
            }
            
            )
            
            console.log("user there");
            console.log(user);
     
        setEmail('')
         setAuth({user:email})

            //dispatch the setCredentials action which stores
            //username and token in login slice
            
         dispatch(setCredentials({username:response.data.name,token:response.data.accessToken,role:response.data.role,id:response.data.id}))
       
        setPassword('')

        navigate('/home');
        
        
        
    } catch (err) {
        if(!err?.response){
            setErrMsg('No Server Response')
        }else if(err?.response?.status===400){
            setErrMsg('Missing username or Password')
        }else if(err?.response?.status===401){
            setErrMsg("unAuthorized")
        }else{
            setErrMsg('Login Failed')
        }
        // errRef.current.focus();
    }
   

}
   

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                {/* <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live='assertive'>{errMsg}</p> */}
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            
                            type="email"
                            id='email'
                            ref={userRef}
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            required
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            ref={userRef}
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            required
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                   
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
    );
}
