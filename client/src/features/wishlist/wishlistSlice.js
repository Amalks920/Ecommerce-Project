import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import wishlistService from "./wishlistService";

export const createWishlist = createAsyncThunk(
  '/wishlist/create-wishlist',
  async (data,thunkAPI) => {
    try {
      return await wishlistService.createWishlist(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);




export const getWishlist=createAsyncThunk(
    '/wishlist/get-wishlist',
    async(userid,thunkAPI)=>{
        try {
            
           return await wishlistService.getWishlist(userid) 
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteWishlistProduct=createAsyncThunk(
  '/wishlist/delete-wishlist-product',
  async(data,thunkAPI)=>{
      try {
          
         return await wishlistService.deleteWishlistProduct(data) 
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
  }
)


const getWishlistFromLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : null;

console.log(getWishlistFromLocalStorage)
export const resetState = createAction("Reset_all");
const initialState = {
  wishlist:getWishlistFromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isChanged:0,
  message: "",
};


export const wishlistSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createWishlist.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createWishlist.fulfilled,(state)=>{

        })
        .addCase(getWishlist.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getWishlist.fulfilled,(state)=>{

        })
    }
})

export default wishlistSlice.reducer