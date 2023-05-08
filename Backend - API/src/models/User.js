const { DataTypes } = require("sequelize")

const conn = require("../db/conn")

const User = conn.define("User",{
    name:{
        type: DataTypes.STRING,
        required: true
    },
    email:{
        type: DataTypes.STRING,
        required: true
    },
    passwordHash:{
        type: DataTypes.STRING,
        required: true
    },
    dataPolicyCheck:{
        type: DataTypes.BOOLEAN,
        required: true,
    }
})

module.exports = User