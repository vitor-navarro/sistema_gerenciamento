const User = require("../models/User")

const getUser = (email) => User.findOne({ where: {email:email}, raw:true});

module.exports = getUser