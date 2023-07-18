import React from 'react'
import { useSelector } from 'react-redux'



const Home = () => {
    const user=useSelector((store)=>store.user.user)

  return (
    <div>Home</div>
  )
}

export default Home