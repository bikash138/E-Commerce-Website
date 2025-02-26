const jwt = require("jsonwebtoken")

exports.auth = async (req,res) => {
    try{
        //Extract JWT from request cookies
        const token = req.cookies.token;

        //If JWT is missing return error
        if(!token){
            return res.status(401).json({
                success:"false",
                message: "TOken Missing"
            })
        }
        try{
            //Verify the token using secret key stored in environment variables
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            console.log(decode)

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