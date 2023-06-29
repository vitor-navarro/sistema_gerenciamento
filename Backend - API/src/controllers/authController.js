const bcrypt = require("bcrypt")
const getEmail = require("../services/users/getEmail")
const getUserByName = require("../services/users/getUserByName")
const email_format_validator = require("../validators/email_format_validator")
const bcryptsaltRounds = process.env.BCRYPT_SALT_ROUNDS

const createToken = require("../services/tokens/createToken")
const readToken = require("../services/tokens/readToken")


const logger = require("../services/logger/logger")
const getUserById = require("../services/users/getUserById")

module.exports = class AuthController {

	static async userExist(req, res) {
		const userName = req.body.userName

		if (!userName) {
			const data = {
				message: "Função userExist chamada sem Usuário",
				path: "auth/userExist"
			}

			logger.serious(data)
			return res.status(500).send("Usuário não fornecido")
		}

		getUserByName(userName).then((response => {
			res.status(response.status).send(response.success)
		}))
	}

	static async emailExist(req, res) {
		const email = req.body.email

		if (!email) {
			const data = {
				message: "Função emailExist chamada sem email",
				path: "auth/emailExist"
			}

			logger.serious(data)

			return res.status(500).send("Email não fornecido")
		}

		getEmail(email).then((response => {
			res.status(response.status).send(response.success)
		}))
	}

	static async getUserFromToken(req, res) {

		const { token } = req.body

		console.log(token)

		if (!token) {

			const data = {
				message: "Tentativa de acesso sem token",
				path: req.path
			}

			logger.serious(data)

			return res.status(401).json({ message: "Token não fornecido" })
		}

		try {

			const decoded = readToken(token)
			const userId = decoded.id
			getUserById(userId).then(
				(response) => {
					if (response.success) {
						const user = {
							name: response.userDB.name,
							email: response.userDB.email,
						}

						return res.status(response.status).json({ user })
					} else {
						return res.status(response.status).json({ message: user.message })
					}
				}
			)
		}
		catch (err) {
			console.log(err)

			const data = {
				message: "Erro ao obter informações do usuário por token fornecido",
				path: req.path
			}

			logger.serious(data)

			return res.status(500).json({ message: "Erro ao obter informações do usuário." })
		}

	}

	static async login(req, res) {

		const function_path = "/auth/login"

		const user = req.body.user
		const password = req.body.password
		const keepConnected = req.body.keepConnected


		let userDB = null

		if (!user) {
			const data = {
				message: "Tentativa de login sem usuário",
				path: function_path
			}

			logger.serious(data)

			return res.status(500).json({ message: "O campo usuário foi enviado sem nenhuma informação" })
		}

		if (!password) {
			const data = {
				message: "Tentativa de login sem senha",
				path: function_path
			}

			logger.serious(data)

			return res.status(500).json({ message: "O campo senha foi enviado sem nenhuma informação" })
		}


		if (user.length < 3 || user.length > 255) {

			const data = {
				message: "Tentativa de registro sem Nome ou Nome menor que 3 caracteres",
				path: function_path
			}

			logger.serious(data)

			return res.status(401).json({ message: 'Nome inválido, nome deve ter entre 3 e 255 caracteres' });
		}

		if (email_format_validator(user)) {

			await getEmail(user).then((response) => {
				if (response.success) {
					userDB = response.userDB
				} else if (!response.success) {
					return res.status(401).json({ message: "Usuário não encontrado" })
				} else {

					const data = {
						message: "Erro ao buscar usuário no banco de dados - email fornecido",
						error: "sem error trace",
					}

					logger.error(data)
					console.log(data)
					return res.status(500).json({ message: "Erro ao buscar usuário no banco de dados" })
				}
			})
		} else {
			await getUserByName(user).then((response) => {
				if (response.success) {
					userDB = response.userDB
				} else if (!response.success) {
					return res.status(401).json({ message: "Usuário não encontrado" })
				} else {

					const data = {
						message: "Erro ao buscar usuário no banco de dados - usuário fornecido",
						error: "sem error trace",
					}

					logger.error(data)
					console.log(response)
					console.log(data)
					return res.status(500).json({ message: "Erro ao buscar usuário no banco de dados" })
				}
			}
			)
		}

		if (userDB === null) {
			return
		} else {
			bcrypt.compare(password, userDB.passwordHash, function (err, result) {
				if (err) {
					const data = {
						message: "Erro ao comparar senha - login",
						error: "sem error trace",
					}

					logger.error(data)
					return res.status(500).json({ message: "Erro ao comparar senha" })
				} else if (result) {
					const token = createToken(userDB)
					return res.status(200).json({
						message: "Login efetuado com sucesso",
						name: userDB.name,
						email: userDB.email,
						token: token,
					})
				} else {
					return res.status(401).json({ message: "Senha incorreta" })
				}
			});
		}
	}

}