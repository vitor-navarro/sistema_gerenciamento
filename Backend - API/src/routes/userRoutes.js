const express = require("express")
const router = express.Router()

const UserController = require("../controllers/userController")

router.post("/add", UserController.addUser)
router.post("/getOneByName", UserController.getOneByName)

module.exports = router