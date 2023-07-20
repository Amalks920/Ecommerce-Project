
import axios from 'axios'
import { BACKEND_API } from "./constants";
console.log(BACKEND_API)

const URL=`${BACKEND_API}/user/register`

export const register=(data)=>{
    

   
    axios.post(URL,data)
    .then( (res)=>{   
        console.log('hello')
        console.log(res)
        return JSON.stringify(res)
    //     dispatch(setUser(data))
    //    navigate('/')
        
    })
    .catch((err)=>{ 
        console.log('error in axios')
        // dispatch(setError(err.message))
         console.log(err.message)
         console.log(err)
         return err.message
        })
}