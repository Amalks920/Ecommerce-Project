import { useLocation,Navigate,Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";

const RequireRoleAuth=(isHome)=> {
    const {auth}=useAuth()

    const navigate=useNavigate()
    const location=useLocation()
        
    console.log("role of:"+ auth.role)
    return (
       
        auth?.role==="user"
            ?<Outlet/>
            :<Navigate to="/login" state={{from:location}} replace/>
    );
}

export default RequireRoleAuth;