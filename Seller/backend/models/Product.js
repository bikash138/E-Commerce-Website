const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: { 
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productSubCategory: {
        type: String,
        required: true
    },
    productThumbnail: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Product", productSchema)