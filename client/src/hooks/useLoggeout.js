import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'


const useLoggeout = () => {
  const user=useSelector(store=>store.auth)
  let dispatch=useDispatch()
  dispatch(logout())
}

export default useLoggeout