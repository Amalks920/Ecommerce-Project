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

export const getCart = createAsyncThunk("/get-cart", async (userid,thunkAPI) => {
  try {
    return await cartService.getCart(userid);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

const initialState = {
  cart: [],
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
        state.isDecreased = true;
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
