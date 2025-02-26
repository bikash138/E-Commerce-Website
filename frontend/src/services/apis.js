const BASE_URL = "http://localhost:4000/api/v1"

//Auth Endpoints
export const endpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login"
}

//Course Endpoints
export const productEndpoints = {
    ADD_PRODUCT_API: BASE_URL + "/product/add-items"
}