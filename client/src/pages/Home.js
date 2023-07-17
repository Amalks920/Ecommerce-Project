import React from 'react'
import { useSelector } from 'react-redux'
import { Login } from './Login'

const Home = () => {
    const user=useSelector((store)=>store.user.user)

    if(!user) return <Login />
  return (
    <div>Home</div>
  )
}

export default Home