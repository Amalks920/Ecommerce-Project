import {configureStore} from '@reduxjs/toolkit'
import userSlice from './loginSlice';
import productSlice from '../features/products/productSlice';
import cartSlice from '../features/cart/cartSlice';
import couponSlice from '../features/coupon/couponSlice';
import  authSlice  from '../features/auth/authSlice';

const store = configureStore({
    
    reducer:{
        user:userSlice,
        auth:authSlice,
        products:productSlice,
        cart:cartSlice,
        coupon:couponSlice
    }
})

export default store;
