import  { BACKEND_API } from '../utils/constants'
import axios from 'axios'

export  const userSignup=(name,email,mobile,password)=>{
    const data={
        "name":name,
        "email":email,
        "mobile":mobile,
        "password":password
    }
    const URL=`${BACKEND_API}/user/reg`

    axios.post(URL,data)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err.message)})
    
}