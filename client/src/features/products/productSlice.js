import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk(
  '/products/get-products',
  async ( thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const getProductsFromLocalStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : null;



export const resetState = createAction("Reset_all");
const initialState = {
  products:getProductsFromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isChanged:0,
  message: "",
};

const productSlice=createSlice({
  name:"products",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    console.log(builder)
    builder.
    addCase(getProducts.pending,(state)=>{
      state.isLoading=true;
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
      // state.isSuccess=true,
      state.products=action.payload
      console.log(action.payload)
    })
  }
})


export default productSlice.reducer

