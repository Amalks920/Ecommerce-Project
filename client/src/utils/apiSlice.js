import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCredentials,logout } from './loginSlice';


const baseQuery=fetchBaseQuery({
    baseUrl:'http://localhost:5000',
    credentials:'include',
    prepareHeaders:(headers,{getState})=>{
        const token=getState().auth.token

        if(token){
            headers.set("authorization", `Bearer ${token}`)
        }

        return headers
    }
})

const baseQueryWithReauth=async (args,api,extraOptions)=>{
    let result=await baseQuery(args,api,extraOptions)

    if(result?.error?.originalStatus===403){
        console.log('send the refreshtoken')

        const refreshResult=await baseQuery('/refresh',api,extraOptions)
        console.log(refreshResult)
    
    if(refreshResult?.data) {
        const user=api.getState().auth.user

        api.dispatch(setCredentials({...refreshResult.data,user}))

        result=await baseQuery(args,api,extraOptions)
    }else{
        api.dispatch(logout())
    }
}
return result
}

export const apiSlice=createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder=>({})
})