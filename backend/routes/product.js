const express = require("express")
const router = express.Router()

//Import Controllers
const{
    createProduct,
    getSellerProducts,
    deleteProduct
} = require("../controllers/Product")

const {auth} = require ("../middleware/auth")


//Product Routes
router.post("/add-items",auth, createProduct)
router.get("/getProductDetails",auth, getSellerProducts)
router.delete("/deleteProduct", auth, deleteProduct)

module.exports = router;