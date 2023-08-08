import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  password_validation,
} from "../utils/inputValidations";
import { register } from "../utils/register";
import { setUser } from "../utils/loginSlice";
import { useEffect, useRef, useState } from "react";

const usernameRegex = /^[A-z][A-z0-9-_]{3,23}$/;
const emailRegex=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const mobileRegex= /^(?:(?:\+|00)(\d{1,3})[\s-]?)?(\d{10})$/;



export const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const methods = useForm();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  //validation for username
  useEffect(() => {
    const result = usernameRegex.test(name);
    setValidName(result);
  }, [name]);

  //validation for email
  useEffect(() => {
    const result = emailRegex.test(email);
    setValidEmail(result);
  }, [email]);


  //validation for mobile
  useEffect(() => {
    const result = mobileRegex.test(mobile);
    setValidMobile(result);
  }, [mobile]);
  

  useEffect(() => {
    const result = passwordRegex.test(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [name, password,email,mobile]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = usernameRegex.test(name);
    const v2 = passwordRegex.test(password);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    let data = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      role: "user",
    };

    const res = register(data);
    console.log(res?.message);
    navigate("/login");
  };

  return (
    <div>
      <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
        {errMsg}
      </p>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a>
            <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div></div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined">
                name
              </label>
              {!validName && name.length!=0 && <p className="text-red-500">Invalid Name</p>}
              <input
                type="name"
                id="name"
                name="name"
                ref={userRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                required
                aria-describedby="uidnote"
                aria-invalid={validName ? "false" : "true"}
                className="border block w-full mt-1 border-gray-300
 rounded-md shadow-sm focus:border-indigo-300
  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <p
                id="uidnote"
                className={
                  nameFocus && name && !validName ? "instructions" : "offscreen"
                }>
                {/* <p>
    7 to 29 characters.<br/>
    Must begin with a letter <br/>
    Letters,numbers,underscores,hyphens allowed
    </p> */}
              </p>
            </div>

            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined">
                Email
              </label>
              {!validEmail && email.length!=0 && <p className="text-red-500">Invalid Email</p>}
              <input
                type="text"
                id="email"
                value={email}
                name="email"
                ref={userRef}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border block w-full mt-1 border-gray-300
 rounded-md shadow-sm focus:border-indigo-300
  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
               <p
                id="uidnote"
                className={
                  !validEmail && email ? "instructions" : "offscreen"
                }></p>
            </div>

            <div className="mt-4">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 undefined">
                mobile
              </label>
              {!validMobile && mobile.length!=0 && <p className="text-red-500">Invalid Mobile</p>}

              <input
              
                type="number"
                id="mobile"
                name="mobile"
                ref={userRef}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="border block w-full mt-1 border-gray-300
 rounded-md shadow-sm focus:border-indigo-300
  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined">
                Password
              </label>
              {!validPassword && password.length!=0 && <p className="text-red-500">Invalid Password</p>}

              <input
                type="password"
                id="password"
                name="password"
                ref={userRef}

                onChange={(e) => setPassword(e.target.value)}
                required
                className="border block w-full mt-1 border-gray-300
 rounded-md shadow-sm focus:border-indigo-300
  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <a className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>

            <div className="flex items-center mt-4">
              <button
                // disabled={!validName || !validPassword || validMobile || validEmail ? true : false}
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>

          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link to={"/login"} className="text-purple-600 hover:underline">
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
            
          </div>
        </div>
      </div>
    </div>
  );
};



