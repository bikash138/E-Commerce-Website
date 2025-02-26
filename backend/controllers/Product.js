const { uploadImageToCloudinary } = require("../utils/imageUploader")


exports.createProduct = async (req, res) => {
    try{
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
        const image = await uploadImageToCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        )
        console.log(image)

        //Create a new Product Listing with given details
        const newProduct = await Product.create({
            productName,
            productDescription,
            productPrice,
            productCategory,
            productSubCategory,
        })

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