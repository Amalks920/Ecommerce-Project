import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    token: null,
    role:"user"
   
  },
  reducers: {

    setCredentials: (state, action) => {
      console.log('payload');
      console.log(action.payload)
      const { username, token,role } = action.payload
     console.log(username,token)
      state.username = username
      state.token = token
      state.role=role
      console.log(state.role)
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
