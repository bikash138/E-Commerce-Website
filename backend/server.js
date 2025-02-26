const express = require ("express")
const dotenv =require("dotenv")
const database = require("./config/database")
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")
const cors = require("cors")
const { cloudinaryConnect } = require("./config/cloudinary")
const fileUpload = require("express-fileupload")

const app = express();

//Setting Up PORT
const PORT =  4000;

//Loading Envireonment Variables
dotenv.config();

//Connecting to Database
database.connect()

//Middlewares
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}))
app.use(express.json())

//To upload files
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir : '/tmp/'
}))

//Connecting To Cloudinary
cloudinaryConnect();

//Routes
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/product", productRoutes)


//Testing the Server
app.get("/", (req,res)=>{
    res.json({
        message: "You are connected to backend at port 4000"
    })
})

//Listening to PORT
app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`)
})
