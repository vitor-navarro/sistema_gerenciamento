const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const readToken = (token)=>{

	try{
		const decoded = jwt.verify(token, jwtSecret)
		return decoded
	} catch (err) {
		return false
	}

}

module.exports = readToken