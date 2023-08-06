import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import useAuth from "../hooks/useAuth";


const PersistLogin=()=>{
    const [isLoadin,setIsLoading]=useState('');
    const {auth}=useAuth();

    useEffect(()=>{

    },[])
}