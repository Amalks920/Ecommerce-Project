import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import store from "../utils/store";
import axios from "../api/axios";
import { BACKEND_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "./Signup";
import Home from "./Home";
import { setCredentials } from "../utils/loginSlice";
import { createBrowserHistory } from "history";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const CREATE_NEW_PASSWORD_URL='/user/create-new-password'



export const CreateNewPassword = () => {
  console.log('email');
const email=useSelector(store=>store.user.email)
console.log(email)

  const { setAuth } = useAuth();
  let dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location;

  const [oldPassword, setOldPassword] = useState("");
  const [validOldPassword, setValidOldPassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [validNewPassword, setValidNewPassword] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [oldPassword,newPassword]);

  useEffect(() => {
    const result = passwordRegex.test(oldPassword);
    setValidOldPassword(result);
  }, [oldPassword]);

  useEffect(() => {
    const result = passwordRegex.test(newPassword);
   
    setValidNewPassword(result);
  }, [newPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        CREATE_NEW_PASSWORD_URL,
        JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword,email:email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
     

      setOldPassword("");
      setNewPassword("")

      navigate("/home");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err?.response?.status === 400) {
        console.log(err.response.data.error)
        setErrMsg(err.response.data.error);
      } else if (err?.response?.status === 401) {
        setErrMsg("unAuthorized");
      } else {
        setErrMsg("Login Failed");
      }
      // errRef.current.focus();
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white  rounded-md shadow-2xl h-[400px] pt-[3%] lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Create Password
        </h1>
        {
          <p
            ref={errRef}
            className={
              errMsg
                ? "errmsg text-red-800 text-center mt-[5%] font-bold uppercase"
                : "offscreen"
            }
            aria-live="assertive">
            {errMsg}
          </p>
        }

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800">
              Enter Old Password
            </label>
            {!validOldPassword && oldPassword.length != 0 && (
              <p className="text-red-500">Invalid Email</p>
            )}

            <input
              type="password"
              id="password"
              ref={userRef}
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            {!validNewPassword && newPassword.length != 0 && (
              <p className="text-red-500">Invalid Password</p>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800">
              Create New Password
            </label>
            <input
              ref={userRef}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          
          <button
            disabled={!validNewPassword || !validOldPassword ? true : false}
            className="mt-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Create New Password
            </button>
        </form>


        
      </div>
    </div>
  );
};


export default CreateNewPassword;