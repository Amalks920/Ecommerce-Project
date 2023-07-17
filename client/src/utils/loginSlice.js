import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
      name:"",
      email:"",
      mobile:"",
      isLoggedIn:false
    },
    reducers:{
        
            setUsername(state, action) {
              state.username = action.payload;
              console.log(state.username)
            },
            setUserEmail(state, action) {
              state.email = action.payload;
            },
            setUserMobile(state, action) {
                state.mobile = action.payload;
              },
            setIsLoggedIn(state, action) {
              state.isLoggedIn = action.payload;
            },
          },
    
    
})


console.log(userSlice);

export  const {
    setUsername,
    setUserEmail,
    setUserMobile,
    setIsLoggedIn,
  } = userSlice.actions
export default userSlice.reducer
