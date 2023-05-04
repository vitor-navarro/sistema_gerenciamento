const User = require("../../models/User")

const getUserByName = (name) => User.findOne({ where: {name}, raw:true}).then((userDB)=>{
    if (userDB === null){

        const data = {
            success: false,
            status: 401,
            message: "Usuário não encontrado",
            name,
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

module.exports = getUserByName