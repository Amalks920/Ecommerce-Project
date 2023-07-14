
import './App.css';
import React,{ useState,useEffect } from 'react';

const App=()=>{
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
    <div>
    {/* {
      message.map((el,index)=><p key={index}>{el}</p>)
    } */}
    </div>
  )
}


export default App;
