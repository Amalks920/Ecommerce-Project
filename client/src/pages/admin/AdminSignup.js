import { Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from "react-hook-form";
import { register } from '../../utils/register';
import { setUser } from '../../utils/loginSlice';
import { useEffect, useRef, useState } from 'react';


const usernameRegex = /^[A-z][A-z0-9-_]{3,23}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


 const AdminSignUp= () => {
    const userRef=useRef()
    const errRef=useRef()

const navigate=useNavigate()
const methods=useForm() 
const dispatch=useDispatch()

const [name,setName]=useState('')
const [validName,setValidName]=useState(false)
const [nameFocus,setNameFocus]=useState(false)

const [email,setEmail]=useState('')
const [validEmail,setValidEmail]=useState(false)
const [emailFocus,setEmailFocus]=useState(false)


const [mobile,setMobile]=useState('')
const [validMobile,setValidMobile]=useState(false)
const [mobileFocus,setMobileFocus]=useState(false)


const [password,setPassword]=useState('')
const [validPassword,setValidPassword]=useState(false)
const [passwordFocus,setPasswordFocus]=useState(false)

const [errMsg,setErrMsg]=useState('')
const [success,setSuccess]=useState(false)

const handleSubmit=async (e)=>{
    e.preventDefault();
    const v1=usernameRegex.test(name)
    const v2=passwordRegex.test(password)
       
    if(!v1 || !v2 ){
        setErrMsg('Invalid Entry')
        return 
    }

    let data={
        name:name,
        email:email,
        mobile:mobile,
        password:password,
        role:"admin"
    }

 console.log(res)
    console.log();
     const res=register(data)
     console.log(res?.message)
     navigate('/login')
}



    return (
        <div>
   
           <p ref={errRef} className={errMsg ? "errMsg": "offscreen"}>{errMsg}</p>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
        <a >
        <h3 className="text-4xl font-bold text-purple-600">
                                       Logo
        </h3>
        </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
   
          
        <form onSubmit={handleSubmit}>
        <div>
        </div>
   
        <div>
   <label htmlFor='name' className="block text-sm font-medium text-gray-700 undefined">
        name
    </label> 
   <input 
   type="name" id="name" name="name"
   ref={userRef}
   value={name}
   onChange={(e)=>setName(e.target.value)}
   onFocus={()=>setNameFocus(true)}
   onBlur={()=>setNameFocus(false)}
   
   required
   aria-describedby='uidnote'
   aria-invalid={validName ? "false" :"true"}
    className="block w-full mt-1 border-gray-300
    rounded-md shadow-sm focus:border-indigo-300
     focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
     <p id='uidnote' className={nameFocus && name && !validName ? "instructions" :"offscreen"}>
       {/* <p>
       7 to 29 characters.<br/>
       Must begin with a letter <br/>
       Letters,numbers,underscores,hyphens allowed
       </p> */}
     </p>
   </div>
   
        
        <div className="mt-4">
        <label htmlFor='name' className="block text-sm font-medium text-gray-700 undefined">
        Email
    </label> 
   <input
    type="text" id='email' name="email"
    ref={userRef}
    onChange={(e)=>setEmail(e.target.value)}
    required
    className="block w-full mt-1 border-gray-300
    rounded-md shadow-sm focus:border-indigo-300
     focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
   </div>
       
        <div className="mt-4">
        <label htmlFor='mobile' className="block text-sm font-medium text-gray-700 undefined">
        mobile
    </label> 
   <input
    type="number" id='mobile' name="mobile"
    ref={userRef}
    onChange={(e)=>setMobile(e.target.value)}
    required
    className="block w-full mt-1 border-gray-300
    rounded-md shadow-sm focus:border-indigo-300
     focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
   </div>
       
       <div className="mt-4">
       <label htmlFor='password' className="block text-sm font-medium text-gray-700 undefined">
        Password
    </label> 
   <input
    type="password" id='name' name="password"
    ref={userRef}
    onChange={(e)=>setPassword(e.target.value)}
    required
    className="block w-full mt-1 border-gray-300
    rounded-md shadow-sm focus:border-indigo-300
     focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
   </div>
     
   
       <a className="text-xs text-purple-600 hover:underline">
        Forget Password?
       </a>
   
   
       <div className="flex items-center mt-4">
   
   <button disabled={!validName  || !validPassword ? true :false}  type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
       Register
   </button>
   </div>
   
       </form>
       
   
   
     
   
                               <div className="mt-4 text-grey-600">
                                   Already have an account?{" "}
                                   <span>
                                       <Link to={'/login'} className="text-purple-600 hover:underline" >
                                           Log in
                                       </Link>
                                   </span>
                               </div>
   
                               <div className="flex items-center w-full my-4">
                                   <hr className="w-full" />
                                   <p className="px-3 ">OR</p>
                                   <hr className="w-full" />
                               </div>
                               <div className="my-6 space-y-2">
                                   <button
                                       aria-label="Login with Google"
                                       type="button"
                                       className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                                   >
                                       <svg
                                           xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 32 32"
                                           className="w-5 h-5 fill-current"
                                       >
                                           <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                       </svg>
                                       <p>Login with Google</p>
                                   </button>
   
                                   <button
                                       aria-label="Login with GitHub"
                                       role="button"
                                       className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                                   >
                                       <svg
                                           xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 32 32"
                                           className="w-5 h-5 fill-current"
                                       >
                                           <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                       </svg>
                                       <p>Login with GitHub</p>
                                   </button>
                               </div>
                           </div>
                       </div>
   
                   </div>
               );
    }  


    export default AdminSignUp