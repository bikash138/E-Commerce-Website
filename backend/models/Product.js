const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: { 
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
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
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Product", productSchema)