import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import store from "../utils/store";
import axios from "../api/axios";
import { BACKEND_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "./Signup";
import Home from "./Home";
import { setOtpLogin } from "../utils/loginSlice";
import { createBrowserHistory } from "history";
let history=createBrowserHistory()
const LOGIN_URL = "/user/login";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



export const ForgotPassword = () => {
  // history.replace('/login')
  const userEmail = useSelector((store) => store.user.email);
  //subscribing to login slice
console.log(userEmail+"useremail")
  const { setAuth } = useAuth();
  let dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location;

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);


  const [errMsg, setErrMsg] = useState("");


console.log(userEmail)

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

 

  useEffect(() => {
    const result = emailRegex.test(email);
    setValidEmail(result);
  }, [email]);

   const sendOtp=async(e)=>{
    e.preventDefault()
    try {

      const response=await axios.post('/user/otp-verification-gmail',{userEmail:email})
      console.log(response)
      dispatch(setOtpLogin({email:email}))
      navigate('/forgot-password-otp');
    } catch (error) {
      console.log(error)
    }    
   }

  return (
    <div className="  relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="h-[400px] w-full p-[2%] pt-[4%] m-auto bg-white rounded-md shadow-2xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Forgot Password?
        </h1>
        {
          <p
            ref={errRef}
            className={
              errMsg
                ? "errmsg text-red-800 text-center mt-[2%] font-bold uppercase"
                : "offscreen"
            }
            aria-live="assertive">
            {errMsg}
          </p>
        }

        <form onSubmit={sendOtp} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            {!validEmail && email.length != 0 && (
              <p className="text-red-500">Invalid Email</p>
            )}

            <input
              type="email"
              id="email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
         
         
          <button
            disabled={!validEmail ? true : false}
            className=" mt-5 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Verify Email
          </button>
        </form>   
      </div>
    </div>
  );
};


export default ForgotPassword;