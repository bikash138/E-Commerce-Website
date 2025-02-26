import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { productEndpoints } from "../apis"

const {
    ADD_PRODUCT_API
} = productEndpoints


export const addProductDetails = async(data) => {
    let result = null;
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector("POST", ADD_PRODUCT_API, data)

        console.log("Add Product API Response...", response)
        if(!response?.data?.success){
            throw new Error("Could not Add Product")
        }
        toast.success("Product Added Successfully")
        result = response?.data
    }catch(error){
        console.log("Add Product API Error...", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result;
}