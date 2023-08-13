import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import cartService from "./cartService";
import { ADD_TO_CART_API, INCREASE_CART_COUNT } from "../../utils/constants";

export const createCart = createAsyncThunk(
  ADD_TO_CART_API,
  async (cartData, thunkAPI) => {
    try {
      return await cartService.createCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const increaseCartCount = createAsyncThunk(
  INCREASE_CART_COUNT,
  async (data, thunkAPI) => {
    try {
      return await cartService.increaseCartCount(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const decreaseCartCount = createAsyncThunk(
    '/decrease-cart-count',
    async (data, thunkAPI) => {
      try {
        return await cartService.decreaseCartCount(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const getCart = createAsyncThunk("/get-cart", async (data,thunkAPI) => {
  try {
    return await cartService.getCart(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteCartProduct=createAsyncThunk('/delete-cart',async (data,thunkAPI) => {
  try {
      return await cartService.deleteCartProduct(data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const resetState = createAction("Reset_all");

const getCartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;

const initialState = {
  cart:getCartFromLocalStorage ,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isIncreased:false,
  isDecreased:false,
  isChanged:0,
  message: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCart.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading=false;
        state.isChanged++
      })
      .addCase(increaseCartCount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(increaseCartCount.fulfilled, (state) => {
        state.isIncreased=true;
        state.isLoading=false
        state.isChanged++
      })
      .addCase(decreaseCartCount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(decreaseCartCount.fulfilled, (state) => { 
        state.isLoading=false
        state.isChanged++
      })
      .addCase(deleteCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartProduct.fulfilled, (state) => {
        state.isLoading=false
        state.isChanged++
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        
        state.isLoading=false
        state.cart = action.payload;
        
        console.log(action.payload);
      });
  },
});

export default cartSlice.reducer;
