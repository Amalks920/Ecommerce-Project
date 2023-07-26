import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    token: null
   
  },
  reducers: {

    setCredentials: (state, action) => {
      console.log('payload');
      console.log(action.payload)
      const { username, token } = action.payload
     console.log(username,token)
      state.username = username
      state.token = token
    },
    loggout: (state, action) => {
      state.user = null
      state.token = null
    }
  }

})


console.log(userSlice);

export const {
  setCredentials, loggout
} = userSlice.actions



export default userSlice.reducer
