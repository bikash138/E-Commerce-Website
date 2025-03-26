const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required: true,
            trim: true
        },
        lastName: {
            type:String,
            required: true,
            trim: true
        },
        products:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        profile:[
            {
                type: mongoose.Schema.Types.ObjectId,
                // required :true,
                ref: "Profile"
            }
        ],
        email: {
            type:String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        confirmPassword: {
            type: String,
            
        },
    },
    {timestamps:true}
)
module.exports = mongoose.model("Seller", sellerSchema)