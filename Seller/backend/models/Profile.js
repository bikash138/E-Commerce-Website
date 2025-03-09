const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema(
    {
        address:{
            type: String,
        },
        contactNo:{
            type: Number
        }
    }
)
module.exports = mongoose.model("Profile", profileSchema)
