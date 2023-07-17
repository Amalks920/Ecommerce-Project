import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
      user:[]
      // name:"",
      // email:"",
      // mobile:"",
      // isLoggedIn:false
    },
    reducers:{
        
            // setUsername(state, action) {
            //   state.username = action.payload;
            //   console.log(state.username)
            // },
            setUser:(state,action)=> {
              state.user=action.payload
              console.log('here=-----------')
              console.log(state.user)
            },
            // setUserEmail(state, action) {
            //   state.email = action.payload;
            // },
            // setUserMobile(state, action) {
            //     state.mobile = action.payload;
            //   },
            // setIsLoggedIn(state, action) {
            //   state.isLoggedIn = action.payload;
            // },
          },
    
    
})


console.log(userSlice);

export  const {
    setUser
  } = userSlice.actions
export default userSlice.reducer
