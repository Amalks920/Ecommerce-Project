import axios from "../../api/axios";
import { config } from "../../utils/axiosConfig";
import { 
    ADD_TO_CART_API,GET_CART,INCREASE_CART_COUNT,
    DECREASE_CART_COUNT,
    DELETE_CART_PRODUCT
 } from "../../utils/constants";



const createCart= async (cart) => {
    const response = await axios.post(ADD_TO_CART_API, cart, config);
  
    return response.data;
  };




const increaseCartCount=async (data) =>{
    try {
        const response=await axios.post(INCREASE_CART_COUNT,data,config)
        return response.data
    } catch (error) {
        return error.message
    }
}

const getCart=async (data)=>{
    try {
        const response=await axios.post(GET_CART,data,config)
        console.log(response)
        localStorage.setItem("cart", JSON.stringify(response.data));
        return response.data
    } catch (error) {
        return error.message
    }
}

const decreaseCartCount=async (data) =>{
    try {
        const response=await axios.post(DECREASE_CART_COUNT,data,config)
        return response.data
    } catch (error) {
        return error.message
    }
}
const deleteCartProduct=async(data) =>{
    try {
        console.log(data+"a[pi")
        const response=await axios.post(DELETE_CART_PRODUCT,data,config)
        return response.data
    } catch (error) {
        return error.message
    }
}
let cartService={
    createCart,
    increaseCartCount,
    getCart,decreaseCartCount,
    deleteCartProduct
}

  export default cartService