const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const createToken = (userDB => {
	const token = jwt.sign({ id: userDB.id, name: userDB.name, email: userDB.email }, jwtSecret)
	return token
})

module.exports = createToken