
import './App.css';
import React,{ useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';

function App(){
  const [message,setMessage]=useState('');

  useEffect(()=>{
    getApi()
  },[])

  async function getApi(){
    try {
      const data= await fetch("http://localhost:5000/api/admin/get-all-users")
      const json= await data.json()
      // setMessage(json.users)
      console.log(json)
    } catch (error) {
        console.log(error.message)
    }
   
    
  }
  
  return(
    <div className="w-screen h-screen">
    <Navbar />
   
    </div>
  )
}


export default App;
