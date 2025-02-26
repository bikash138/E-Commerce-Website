const express = require("express")
const router = express.Router()

//Import Controllers
const{
    createProduct
} = require("../controllers/Product")


//Product Routes
router.post("/add-items", createProduct)

module.exports = router;