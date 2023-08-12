import {configureStore} from '@reduxjs/toolkit'
import userSlice from './loginSlice';
import productSlice from './productSlice';
import cartSlice from '../features/cart/cartSlice';
import couponSlice from '../features/coupon/couponSlice';

const store = configureStore({
    
    reducer:{
        user:userSlice,
        products:productSlice,
        cart:cartSlice,
        coupon:couponSlice
    }
})

export default store;
