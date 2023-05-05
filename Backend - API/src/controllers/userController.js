const bcrypt = require("bcrypt")
const bcryptsaltRounds = 10

const User = require("../models/User")
const getUserByName = require("../services/users/getUserByName")
const { email_format_validator } = require("../validators/email_format_validator")
const { emailExist, userExist } = require("./authController")

module.exports = class UserController{

    static async addUser(req,res){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        if (name.length < 3 || name.length > 255) {
          return res.status(400).json({ message: 'Nome inválido, nome deve ter entre 3 e 255 caracteres' });
        }
      
        if (email_format_validator(email)) {
          return res.status(400).json({ message: 'E-mail inválido' });
        }
      
        if (password.length < 7) {
          return res.status(400).json({ message: 'Senha deve te no minimo 7 caracteres' });
        }

        if(emailExist(email)){
          //caso aconteça existe algum problema na aplicação ou a pessoa está tentando burlar o sistema
          return res.status(400).json({ message: 'Email já cadastrado em outro usuário' });
        }

        if(userExist(name)){
          //caso aconteça existe algum problema na aplicação ou a pessoa está tentando burlar o sistema
          return res.status(400).json({ message: 'Usuário já cadastrado' });
        }

        const passwordHash = await bcrypt.hash(password, bcryptsaltRounds)

        const user = {
            name,
            email,
            passwordHash
        }

        await User.create(user)

        res.status(200).redirect("/login")
        
    }

    static async getOneByName(req,res){
        const name = req.body.name

        const userDB = await getUserByName(name).then((userDB)=>{
          if(!userDB.success) {
            res.status(userDB.status).send(userDB)
          }else{
            res.status(userDB.status).send(userDB.userDB)
          }
        })
    }
  
}