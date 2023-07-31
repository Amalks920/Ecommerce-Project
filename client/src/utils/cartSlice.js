import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        count:0
    },

    reducers:{
        cacheCartProducts:(state,action)=>{
            
           state.cart.push(action.payload)
            
        },
        updateCount:(state,action)=>{
            state.count++
        }
    }

})

export const {cacheCartProducts}=cartSlice.actions

export default cartSlice.reducer;