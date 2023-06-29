const express = require("express")
const router = express.Router()

const AuthController = require("../controllers/authController")

router.post("/login", AuthController.login)
router.post("/userExist", AuthController.userExist)
router.post("/emailExist", AuthController.emailExist)

router.post("/getUserFromToken", AuthController.getUserFromToken)

module.exports = router