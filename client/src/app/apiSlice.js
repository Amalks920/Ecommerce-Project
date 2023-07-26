import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials,loggout } from '../utils/loginSlice'


const baseQuery=fetchBaseQuery({
    baseUrl:"http://localhost:5000",
    credentials:'include',
    prepareHeaders:(headers,{getState})=>{
        const token=getState().auth.token

        if(token){
            headers.set('authorization',`Bearer ${token}`)
        }
        return headers

    }

})

const baseQueryWithReauth=async(args,api,extraOptions)=>{
    let result=await baseQuery(args,api,extraOptions);

   
}