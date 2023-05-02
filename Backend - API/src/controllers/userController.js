const bcrypt = require("bcrypt")
const bcryptsaltRounds = 10

const User = require("../models/User")

module.exports = class UserController{

    static async addUser(req,res){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        const passwordHash = await bcrypt.hash(password, bcryptsaltRounds)

        const user = {
            name,
            email,
            passwordHash
        }

        await User.create(user)
        
        res.status(200).redirect("/login")
        

    }
  
}