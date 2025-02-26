const mongoose = require("mongoose")
require("dotenv").config()

const {MONGODB_URL} = process.env;

exports.connect = () =>{
    mongoose
        .connect(MONGODB_URL)
        .then(console.log("DB Connection Successfull"))
        .catch((err)=>{
            console.log("Db Connection Failed");
            console.log(err);
            process.exit(1);
        })
}