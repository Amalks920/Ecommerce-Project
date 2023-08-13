import axios from "../../api/axios";
import { config } from "../../utils/axiosConfig";

const login = async (user) => {
  const response = await axios.post(`/user/login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout= async (user) => {
  try {
    
    const response=await axios.get('/user/logout',config)
    
    return response.data

  } catch (error) {
    return error.message
  }
}

let authService={
  login,logout
}

export default authService