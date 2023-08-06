import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products:[]
   
  },
  reducers: {

    setProducts: (state, action) => {
      
      state.products=action.payload
    },
    
  }

})


console.log(productSlice);

export const {
  setProducts
} = productSlice.actions



export default productSlice.reducer
