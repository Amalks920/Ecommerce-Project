import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products:[]
   
  },
  reducers: {

    setProducts: (state, action) => {
      console.log('payload');
      console.log(action.payload)
      state.products.push(action.payload)
    },
    
  }

})


console.log(productSlice);

export const {
  setProducts
} = productSlice.actions



export default productSlice.reducer
