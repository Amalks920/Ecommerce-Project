import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import orderService from "./orderService";


export const createOrder = createAsyncThunk(
    "order/create-order",
    async (data,thunkAPI) => {
      try {
        return await orderService.createOrder(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const getAOrder = createAsyncThunk(
    "order/get-order",
    async (userid,thunkAPI) => {
      console.log(userid)
      try {
        return await orderService.getOrder(userid);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );



  export const resetState = createAction("Reset_all");

  const getCartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;

  const initialState = {
    order:getCartFromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

  export const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createOrder.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.order=action.payload
        })
    }
  })



  export default orderSlice.reducer;