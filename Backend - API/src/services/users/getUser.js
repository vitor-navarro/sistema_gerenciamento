const User = require("../../models/User")

const getUser = (email) => User.findOne({ where: {email:email}, raw:true}).then((userDB)=>{
    if (userDB === null){

        const data = {
            success: false,
            status: 404,
            message: "Usuário não encontrado",
            email,
        } 

        return data
    } else{

        const data = {
            success: true,
            status: 200,
            message: "",
            userDB,
        }

        return data
    }

}
);



module.exports = getUser