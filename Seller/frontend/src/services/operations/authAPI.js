import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { useDispatch } from "react-redux"
import { setToken } from "../../redux/slices/authSlice"
import {setUser} from "../../redux/slices/profileSlice"

const {
    SIGNUP_API,
    LOGIN_API,

} =endpoints


export function signUp(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    role,
    navigate
){
    return async () => {
        const toastId = toast.loading("Loading...")
        
        try{
            const response = await apiConnector("POST", SIGNUP_API,{
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            role
            })
            console.log(
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                role
            )
            console.log("SIGNUP API RESPONSE>>>>>", response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("SignUp Successfull")
            if(role === "Seller"){
                navigate("/seller/login")
            }
            if(role === "Admin"){
                navigate("/admin/login")
            }
            if(role === "Customer"){
                navigate("/customer/login")
            }

        }catch(error){
            console.log("SIGNUP API ERROR....", error)
            toast.error("SignUp Failed");
        }
        toast.dismiss(toastId)
    }
}

export function login(email, password, role, navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        try{
            //Send data to Request
            const response = await apiConnector ("POST", LOGIN_API, {
                email,
                password,
                role,
            })
            console.log("LOGIN API RESPONSE>>>>>", response)

            if(!response.data.success){
                throw new Error(response.data.message)
                //toast.error(response.data.message)
            }

            toast.success("Logged In Successfully")

            if(role === "Admin"){
                navigate("/dashboard/analytics")
            }
            else if(role === "Seller"){
                navigate("/dashboard/profile")
            }
            else if(role === "Customer"){
                navigate("/customer/dashboard/profile")
            }
            dispatch(setToken(response.data.token))
            dispatch(setUser({ ...response.data.user }))
            

            localStorage.setItem("token", JSON.stringify(response.data.token))
        }catch(error){
            console.log("LOGIN API ERROR....", error)
            toast.error("Login Failed");
        }
        toast.dismiss(toastId);
    }
}

export function logout(navigate){
    return(dispatch)=>{
        dispatch(setToken(null));
        localStorage.removeItem("token");
        toast.success("Logged Out")
        navigate("/")   
        window.location.reload();
    }
}