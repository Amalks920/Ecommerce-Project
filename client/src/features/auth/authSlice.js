import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// export const resetState = createAction("Reset_all");

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout=createAsyncThunk(
  "auth/logout",
  async (thunkAPI)=>{
    try {
      
      return await authService.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  )



export const authSlice=createSlice({
  name:"auth",
  initialState:initialState,
  reducers:{},
  xtraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(logout.pending,(state)=>{
        console.log('HII')
        state.isLoading=true;
      })
      .addCase(logout.fulfilled,(state)=>{
        console.log('loggout')
        localStorage.removeItem('user')
      })
    }
})


export default authSlice.reducer