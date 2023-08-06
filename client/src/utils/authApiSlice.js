import { apiSlice } from "./apiSlice";
import loginSlice from "./loginSlice";
export const authApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:credentials=>({
                url:'/auth',
                method:'POST',
                body:{...credentials}
            })
        })
    })
})