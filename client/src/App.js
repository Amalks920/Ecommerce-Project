import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { AdminHome } from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import Home from "./pages/Home";
import { redirect } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminLogin from "./pages/admin/AdminLogin";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, RequireAdminAuth } from "./components/RequireAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import RequireRoleAuth from "./components/RequireRoleAuth";
import ProductManagement from "./pages/admin/ProductManagement";
import EditProduct from "./pages/admin/EditProduct";
import UserManagement from "./pages/admin/UserManagement";
import OtpLogin from "./pages/OtpLogin";
import Reg from "./pages/Reg";

let isLoggedIn;

function App() {
  isLoggedIn = useSelector((store) => store.user);
  console.log("isLoggedIn");
  console.log(isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="otp-login" element={<OtpLogin />}></Route>

          <Route element={<RequireAuth />}>
            <Route path="home" element={<Home />}></Route>
          </Route>

          <Route path="reg" element={<Reg />}></Route>
        </Route>
      </Routes>

      <Routes path="admin" element={<MainContainer/>}>
        {/* <Route element={<RequireAdminAuth isAdmin={"admin"}/>}> */}
      
        <Route path="/admin/admin-login" element={<AdminLogin />}></Route>
        <Route path="/admin/admin-signup" element={<AdminSignup />}></Route>
        <Route path="/admin/admin-home" element={<AdminHome />}></Route>
        <Route path="/admin/add-product" element={<AddProduct />}></Route>
        <Route
          path="/admin/product-management"
          element={<ProductManagement />}></Route>
        <Route path="/admin/edit-product" element={<EditProduct />}></Route>
        <Route
          path="/admin/user-management"
          element={<UserManagement />}></Route>
          {/* </Route> */}
         
      </Routes>
    </>
  );
}

export default App;
