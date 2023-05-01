const bcrypt = require("bcrypt")
const User = require("../models/User")

module.exports = class AuthController{

    static async login(req,res){

        const user = req.body.user
        let password = req.body.password

        if(!user){
            return res.status(500).send("O campo usuário foi enviado sem nenhuma informação")
        }

        if(!password){
            return res.status(500).send("O campo senha foi enviado sem nenhuma informação")
        }

        const userDB = await User.findOne({ where: {email:user}, raw:true})
        .then((userDB)=>{
            if (userDB === null){
                return res.status(404).send({mensagem:"Usuário não encontrado",user})
            }
        })

        
    }
}