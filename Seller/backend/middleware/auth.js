const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
const Seller = require("../models/Seller");
const User = require("../models/User");
dotenv.config()

exports.auth = async (req,res, next) => {
    try{
        //Extract JWT from request cookies
        const token = 
            req.cookies.token ||
            req.body.token || 
            req.header("Authorization").replace("Bearer ", "");
            

        //If JWT is missing return error
        if(!token){
            return res.status(401).json({
                success:"false",
                message: "Token Missing"
            })
        }
        try{
            //Verify the token using secret key stored in environment variables
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            console.log(decode)
            req.user = decode

        }catch(error){
            return res.status(401).json({
                success:false,
                message: "Token is Invalid"
            })
        }
        //If JWT verified move to next middleware or controller
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message: "Something went wrong while validating Token"
        })
    }
}

exports.isAdmin = async (req,res, next) => {
    try{
        const userDetails = await User.findOne({email: req.user.email})
        if(userDetails.role !== 'Admin'){
            return res.status(401).json({
                success:false,
                message: "This is Admin Route"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message: "User Role can't be Verified"
        })
    }
}

exports.isSeller = async (req,res, next) => {
    try{
        const userDetails = await User.findOne({email: req.user.email})
        if(userDetails.role !== 'Seller'){
            return res.status(401).json({
                success:false,
                message: "This is Seller Route"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message: "User Role can't be Verified"
        })
    }
}

exports.isCustomer = async (req,res, next) => {
    try{
        const userDetails = await User.findOne({email: req.user.email})
        if(userDetails.accountType !== 'Customer'){
            return res.status(401).json({
                success:false,
                message: "This is Customer Route"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message: "User Role can't be Verified"
        })
    }
}