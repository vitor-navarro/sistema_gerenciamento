const bcrypt = require("bcrypt")
const getUser = require("../services/users/getUser")
const bcryptsaltRounds = 10

module.exports = class AuthController{

    static async login(req,res){

        const user = req.body.user
        const password = req.body.password

        if(!user){
            return res.status(500).send("O campo usuário foi enviado sem nenhuma informação")
        }

        if(!password){
            return res.status(500).send("O campo senha foi enviado sem nenhuma informação")
        }

        const userDB = await getUser(user)
        .then((userDB)=>{

            if(!userDB.success){
                res.status(userDB.status).send(userDB)
            }else{
                console.log(userDB) // falta terminar
            }
            // falta terminar


        })

        
    }
}