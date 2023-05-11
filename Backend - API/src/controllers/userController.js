const bcrypt = require("bcrypt")
const bcryptsaltRounds = 10

const User = require("../models/User")
const getUserByName = require("../services/users/getUserByName")
const getEmail = require("../services/users/getEmail")
const email_format_validator = require("../validators/email_format_validator")


module.exports = class UserController{

    static async addUser(req,res){

      const name = req.body.name
      const email = req.body.email
      const password = req.body.password
      const dataPolicyCheck = req.body.dataPolicyCheck

      if (name.length < 3 || name.length > 255) {
        return res.status(401).json({ message: 'Nome inválido, nome deve ter entre 3 e 255 caracteres' });
      }
      
      if (!email_format_validator(email)) {
        return res.status(401).json({ message: 'E-mail inválido' });
      }
      
      if (password.length < 7) {
        return res.status(401).json({ message: 'Senha deve ter no mínimo 7 caracteres' });
      }

      if(await getUserByName(name).then((response =>{
        return response.success
      }))){
        //caso aconteça existe algum problema na aplicação ou a pessoa está tentando burlar o sistema
        return res.status(401).json({ message: 'Usuário já cadastrado' });
      }

      if(await getEmail(email).then((response =>{
        return response.success
      }))){
        //caso aconteça existe algum problema na aplicação ou a pessoa está tentando burlar o sistema
        return res.status(401).json({ message: 'Email já cadastrado em outro usuário' });
      }

      if(dataPolicyCheck === undefined){
        //caso aconteça existe algum problema na aplicação ou a pessoa está tentando burlar o sistema
        return res.status(401).json({ message: 'dataPolicyCheck não fornecido'})
      }

      if(dataPolicyCheck === false || dataPolicyCheck ===  "false"){
        //caso aconteça existe algum problema na aplicação ou a pessoa está tentando burlar o sistema
        return res.status(401).json({ message: 'dataPolicyCheck deve ser verdadeiro'})
      }

      const passwordHash = await bcrypt.hash(password, bcryptsaltRounds)

      const user = {
          name,
          email,
          passwordHash,
          dataPolicyCheck
      }

      await User.create(user)

      return res.status(200).json({message:"Usuário cadastrado com sucesso", redirectTo:"/login"})
        
    }

    static async getOneByName(req,res){
        const name = req.body.name

        await getUserByName(name).then((userDB)=>{
          if(!userDB.success) {
            res.status(userDB.status).send(userDB)
          }else{
            res.status(userDB.status).send(userDB.userDB)
          }
        })
    }
  
}