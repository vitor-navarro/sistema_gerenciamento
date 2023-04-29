const bcrypt = require("bcrypt")
const saltRounds = 10

const User = require("../models/User")

module.exports = class UserController{

    static async addUser(req,res){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password


        passwordHash = await bcrypt.hash(password, saltRounds)

        console.log("name",name)
        console.log("email",email)      
        console.log("password",password)
        console.log("passwordHash",passwordHash)
    }
  
}