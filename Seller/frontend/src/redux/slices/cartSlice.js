import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total"))
        : 0,
    totalItems: localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems"))
        : 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart:(state, action) => {
            const product = action.payload
            const index = state.cart.findIndex((item)=>item._id === product._id)

            if(index >= 0){
                //If the Product is already in the cart do not modify it
                toast.error("Course already in Cart")
                return
            }
            // If the Product is not in the Cart, add it to Cart
            state.cart.push(product)
            //Update the total quantity and price
            state.totalItems++
            state.total += product.productPrice
            //Update the localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
        },
        removeFromCart: (state, action) => {
            const productId = action.payload
            const index = state.cart.findIndex((item)=>item._id === productId)

            if(index>=0){
                //If Product is in Cart, remove it
                state.totalItems--
                state.total -= state.cart[index].price
                state.cart.splice(index, 1)
                //Update the localStorage
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

                toast.success("Product removed from Cart")
            }
        },
        resetCart: (state,action)=>{
            state.cart = [];
            state.total = 0;
            state.totalItems = 0
            //Removing from LocalStorage
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
        }
    }
})
export const {addToCart, removeFromCart, resetCart} = cartSlice.actions;
export default cartSlice.reducer;