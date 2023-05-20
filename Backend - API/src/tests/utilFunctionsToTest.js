const User = require("../models/User")
const Log = require("../models/Log")

async function clearDatabase(){
	await User.destroy({ truncate: true })
	await Log.destroy({ truncate: true })
}

module.exports = {clearDatabase}