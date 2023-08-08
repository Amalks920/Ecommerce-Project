import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        count:0
    },

    reducers:{
        cacheCartProducts:(state,action)=>{
            
           state.cart=action.payload
            
        },
         pushCartProducts:(state,action)=>{
            
           state.cart.push(action.payload)
            
        },
        updateCount:(state,action)=>{
            state.count++
        },
        deleteCart:(state,action)=>{
            state.cart=null;
        }
    }

})

export const {cacheCartProducts,deleteCart,pushCartProducts}=cartSlice.actions

export default cartSlice.reducer;