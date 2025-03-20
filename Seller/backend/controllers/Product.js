const { uploadImageToCloudinary } = require("../utils/imageUploader")
const Product = require("../models/Product")
const User = require("../models/User")

exports.createProduct = async (req, res) => {
    try{
        const userId = req.user.id
        let{
            productName,
            productDescription,
            productPrice,
            productCategory,
            productSubCategory,
            
        } = req.body

        //Get thumnail image from request body
        const thumbnail = req.files.productThumbnail

        //Check if all required fields are provided
        if(
            !productName ||
            !productDescription ||
            !productPrice ||
            !productCategory ||
            !productSubCategory ||
            !thumbnail
        ){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        //Upload thumbnail to clodinary
        const thumbnailImage = await uploadImageToCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        )
        console.log(thumbnailImage)

        const sellerDetails = await Seller.findById(userId)

        //Create a new Product Listing with given details
        const newProduct = await Product.create({
            productName,
            seller: sellerDetails._id,
            productDescription,
            productPrice,
            productCategory,
            productSubCategory,
            productThumbnail: thumbnailImage.secure_url,
        })
        

        await User.findByIdAndUpdate(
            {
                _id: sellerDetails._id,
            },
            {
                $push:{
                    products: newProduct._id
                }
            },
            {new:true}

        )

        //Return the new course and a success message
        res.status(200).json({
            success:true,
            data: newProduct,
            message: "Product Listed Successfully"
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.getSellerProducts = async(req,res)=>{
    try{
        //Get the seller Id
        const sellerId = req.user.id

        //Find all products listed by the seller
        const sellerProducts = await Product.find({
            seller: sellerId
        }).sort( {createdAt:-1 })

        //Return the product details
        res.status(200).json({
            success:true,
            data: sellerProducts
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.deleteProduct = async(req,res)=>{
    try{
        //Get the Product Id from the body
        const {productId} = req.body

        //Find the Course
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({
                success:false,
                message:"Product Not Found"
            })
        }
        //Delete the reference of product in user schema
        await User.findByIdAndUpdate(
            product.seller,
            {
                $pull: { products: productId }
            }
        )

        //Delete the product
        await Product.findByIdAndDelete(productId)

        return res.status(200).json({
            success:true,
            message: "Product Deleted Successfully"
        })
     }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message: "Server Error",
            error: error.message
        })

    }
}