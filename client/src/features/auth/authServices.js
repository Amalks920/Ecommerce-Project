import axios from "../../api/axios";
import { config } from "../../utils/axiosConfig";
import { configLogout } from "../../utils/axiosConfig";


const login = async (user) => {

  const response = await axios.post(`/user/login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  
  return response.data;
};

const logout= async (user) => {
  try {
    
    const response=await axios.get('/user/logout',configLogout)
    console.log(response.status)
    if(response.status=="200"){
      console.log('hi')
      localStorage.clear()
     
    }
    return response

  } catch (error) {
    return error.message
  }
}

let authService={
  login,logout
}

export default authService