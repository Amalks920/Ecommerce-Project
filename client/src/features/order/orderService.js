import axios from "../../api/axios";
import { config } from "../../utils/axiosConfig";
import { CREATE_ORDER, GET_A_ORDER } from "../../utils/constants";

const createOrder=async(data)=>{

    try {
     const response=await axios.post(CREATE_ORDER,data,config)
     if(response.data) localStorage.removeItem('cart')
     return response.data
    } catch (error) {
    return error.message
    }
}

const getOrder=async (userid)=>{
    try {
        const response=await axios.get(`${GET_A_ORDER}/${userid}`,config)
         localStorage.setItem('orders',JSON.stringify(response.data.response))
        console.log(response?.data?.response)
    } catch (error) {
        return error.message
    }
}

const orderService={
    createOrder,getOrder
}

export default orderService;
