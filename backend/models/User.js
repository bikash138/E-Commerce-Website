const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
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
        token: {
            type: String
        },
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
module.exports = mongoose.model("user", userSchema)