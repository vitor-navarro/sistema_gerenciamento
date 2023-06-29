const User = require("../../models/User")

const getUserById = (id) => User.findOne({ where: {id:id}, raw:true}).then((userDB)=>{
    if (userDB === null){

        const data = {
            success: false,
            status: 401,
            message: "Usuário não encontrado",
            id,
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

module.exports = getUserById