import axios from "../../api/axios";
import { config } from "../../utils/axiosConfig";
import { GET_PRODUCTS } from "../../utils/constants";



const getProducts= async () => {

    try {
        const response=await axios.get(GET_PRODUCTS,config)
        console.log(response.data)
        if(response.data){
            localStorage.setItem("products", JSON.stringify(response.data));
        }
        return response.data
        
    } catch (error) {
        return error.message
    }

}

const productService={
    getProducts
}

export default productService