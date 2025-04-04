const express = require("express")
const router = express.Router()

//Import Controllers
const{
    createProduct,
    getSellerProducts,
    deleteProduct,
    getAllProducts,
    getProduct
} = require("../controllers/Product")

const {auth} = require ("../middleware/auth")
//const {isSeller} = require("../middleware/auth")


//Product Routes
router.post("/add-items",auth, createProduct)
router.get("/getProductDetails",auth, getSellerProducts)
router.delete("/deleteProduct",auth, deleteProduct)
router.get("/getAllProducts", getAllProducts)
router.get("/getProduct/:id", getProduct)


module.exports = router;