const bcrypt = require("bcrypt")
const getEmail = require("../services/users/getEmail")
const getUserByName = require("../services/users/getUserByName")
const bcryptsaltRounds = 10

module.exports = class AuthController{

    static async userExist(req,res){
        const userName = req.body.userName

        if(!userName){
			//Devo colocar o logger aqui?
            return res.status(500).send("Usuário não fornecido")
        }

        getUserByName(userName).then((response =>{
            res.status(response.status).send(response.success)
        }))
    }

    static async emailExist(req,res){
        const email = req.body.email

		if(!email){
			//Devo colocar o logger aqui?
            return res.status(500).send("Email não fornecido")
        }

        getEmail(email).then((response =>{
            res.status(response.status).send(response.success)
        }))
    }

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