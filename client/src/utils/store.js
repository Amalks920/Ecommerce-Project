import {configureStore} from '@reduxjs/toolkit'
import userSlice from './loginSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store = configureStore({
    
    reducer:{
        user:userSlice,
        products:productSlice,
        cart:cartSlice
    }
})

export default store;
