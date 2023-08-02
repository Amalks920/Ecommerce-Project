import React, { useEffect } from 'react'
import axios from '../api/axios'
import { useSelector } from 'react-redux'
import { createBrowserHistory } from 'history'

console.log(createBrowserHistory)
const history=createBrowserHistory()
console.log(history.replace())



function Reg() {
 
  history.replace('/login')
  useEffect(()=>{
   
  },[])

  let token=useSelector(store=>store.user.token)
  console.log('token bearer '+token)

 useEffect(()=>{
  localStorage.setItem("token",token)
  token=localStorage.getItem("token")
  console.log("in local storage"+token)
 },[token])

    // useEffect(()=>{
    //   let headers={
    //     'Authorization':`Bearer ${token}`
    //   }
    //     axios.get('/user/reg',{headers})
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .then((err)=>{
    //         console.log(err)
    //     })
    // },[])
   
  return (
   <div className='mt-[20%] border border-black'>hello</div>

  )
}

export default Reg