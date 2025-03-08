const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
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