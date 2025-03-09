import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpData: null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSignUpData(state, value){
            state.signUpData = value.payload;
        },
        setToken(state,value){
            state.token = value.payload
        }
    }
})
export const {setSignUpData, setToken} = authSlice.actions;
export default authSlice.reducer;