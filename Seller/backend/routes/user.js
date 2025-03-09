const express = require("express");
const router = express.Router();

const {
    signUp,
    login
} = require("../controllers/Auth")

const {auth} = require("../middleware/auth")

router.post("/signup", signUp)
router.post("/login", login)

module.exports = router;