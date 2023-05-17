const { DataTypes } = require("sequelize")

const conn = require("../db/conn")

const User = require("./User")

const Log = conn.define("Log",{

    severity_level:{
        type: DataTypes.STRING(12),
        allowNull: false,
		require
    },
    message:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
	error:{
		type: DataTypes.TEXT,
	},
	extra:{
		type: DataTypes.TEXT,
	}

})

module.exports = Log
