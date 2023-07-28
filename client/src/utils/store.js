import {configureStore} from '@reduxjs/toolkit'
import userSlice from './loginSlice';
import productSlice from './productSlice';

const store = configureStore({
    
    reducer:{
        user:userSlice,
        products:productSlice
    }
})

export default store;
