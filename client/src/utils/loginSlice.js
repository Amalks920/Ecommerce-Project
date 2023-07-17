import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
      user:[],
      error:""
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

            setError:(state,action)=>{
              state.error=action.payload
              console.log('here=-----------')
              console.log(state.error)
            }
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
    setUser,setError
  } = userSlice.actions
export default userSlice.reducer
