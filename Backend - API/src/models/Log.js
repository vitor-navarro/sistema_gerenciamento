const { DataTypes } = require("sequelize")

const conn = require("../db/conn")

const User = require("./User")

const Log = conn.define("Log",{

    severity_level:{
        type: DataTypes.ENUM("serious","error","warning","info","performance","other"),
        allowNull: false,
    },
    message:{
        type: DataTypes.TEXT,
        allowNull: false,
    }

})

User.hasMany(Log)
Log.belongsTo(User,{foreignKey:"id", optional:true})

module.exports = Log
