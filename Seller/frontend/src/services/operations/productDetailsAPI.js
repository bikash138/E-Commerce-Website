import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { productEndpoints } from "../apis"

const {
    ADD_PRODUCT_API,
    GET_ALL_PRODUCT_DETAILS_API,
    DELETE_PRODUCT_API,
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
} = productEndpoints


export const addProductDetails = async(data, token) => {
    let result = null;
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector("POST", ADD_PRODUCT_API, data, {
            "Content-Type" : "multipart/form-data",
            Authorization: `Bearer ${token}`
        })

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

export const fetchSellerProducts = async(token)=>{
    let result = [];
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector("GET", 
            GET_ALL_PRODUCT_DETAILS_API, 
            null,
            {
                Authorization: `Bearer ${token}`
            }
        )
        console.log("SELLER PRODUCTS API RESPONSE...", response)
        if(!response?.data?.success){
            throw new Error("Could Not fetch Seller Products")
        }
        result = response?.data?.data
    }catch(error){
        console.log("Get Product Details API Error...", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result;
}

export const deleteProduct = async(data, token)=>{
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector("DELETE", DELETE_PRODUCT_API, data, {
            Authorization: `Bearer ${token}`
        })
        console.log("DELETE PRODUCT API RESPONSE...", response)
        if(!response?.data?.success){
            throw new Error("Could Not Delete Product")
        }
        toast.success("Product Deleted")
    }catch(error){
        console.log("Delete Product API Error...", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}

export const fetchAllProducts = async()=>{
    const toastId = toast.loading("Loading...")
    let result =[]
    try{
        const response = await apiConnector("GET", GET_ALL_PRODUCTS)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch Products")
        }
        result = response?.data?.data
    }catch(error){
        console.log("Fetch All Products API Error...")
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}
 
export const getProduct = async(productId)=>{
    const toastId = toast.loading("Loading...")
    let result = null;
    try{
        const response = await apiConnector("GET", `${GET_PRODUCT}/${productId}` )
        
        if(!response?.data?.success){
            throw new Error("Could Not get the Product")
        }
        //console.log(response)
        result = response?.data?.data
        console.log(result)

    }catch(error){
        console.log("Get Product API Erorr...")
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}