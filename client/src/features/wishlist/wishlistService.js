import axios from "../../api/axios"
import { CREATE_WISHLIST, DELETE_WISHLIST_PRODUCT, GET_WISHLIST } from "../../utils/constants"
import { config } from "../../utils/axiosConfig"


const createWishlist=async(data)=>{
    try {

        const response= await axios.post(CREATE_WISHLIST,data,config)
        console.log(response.data);
        return response?.data?.msg
        
    } catch (error) {
        return error.message
    }

}

const getWishlist=async(userId)=>{
    try {
        const response=await axios.get(`${GET_WISHLIST}/${userId}`,config)

        if(response.data){
            localStorage.setItem("wishlist", JSON.stringify(response.data));
        }

        return response.data
    } catch (error) {
        return error.message
    }
}


const deleteWishlistProduct=async(data)=>{
        try {
            const response=await axios.post(`${`${DELETE_WISHLIST_PRODUCT}/${data.userId}`}`,data,config)
        } catch (error) {
            return error.message
        }
}

const wishlistService={
    createWishlist,
    getWishlist,
    deleteWishlistProduct
}

export default wishlistService