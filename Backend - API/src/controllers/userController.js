const bcrypt = require("bcrypt")
const bcryptsaltRounds = 10

const User = require("../models/User")
const getUserByName = require("../services/users/getUserByName")
const getEmail = require("../services/users/getEmail")
const email_format_validator = require("../validators/email_format_validator")

const logger = require("../services/logger/logger")

module.exports = class UserController {

	static async addUser(req, res) {

		const function_path = "/user/add/"

		const name = req.body.name
		const email = req.body.email
		const password = req.body.password
		const dataPolicyCheck = req.body.dataPolicyCheck

		if (name.length < 3 || name.length > 255) {

			const data = {
				message: "Tentativa de registro sem Nome ou Nome menor que 3 caracteres",
				path: function_path
			}

			logger.serious(data)
			return res.status(401).json({ message: 'Nome inválido, nome deve ter entre 3 e 255 caracteres' });
		}

		if (!email_format_validator(email)) {

			const data = {
				message: "Tentativa de registro com email inválido",
				path: function_path,
			}

			logger.serious(data)
			return res.status(401).json({ message: 'E-mail inválido' });
		}

		if (password.length < 7) {

			const data = {
				message: "Tentativa de registro com senha menor que 7 caracteres",
				path: function_path,
			}

			logger.serious(data)
			return res.status(401).json({ message: 'Senha deve ter no mínimo 7 caracteres' });
		}

		if (await getUserByName(name).then((response => {
			return response.success
		}))) {

			const data = {
				message: "Tentativa de registro em um usuário já registrado",
				path: function_path,
			} // OBS The validations are done in the front end, if this validation arrives here it is because the user tried to access the server directly.

			logger.serious(data)
			return res.status(401).json({ message: 'Usuário já cadastrado' });
		}

		if (await getEmail(email).then((response => {
			return response.success
		}))) {

			const data = {
				message: "Tentativa de registro em um email já cadastrado em outro usuário",
				path: function_path,
			} // OBS The validations are done in the front end, if this validation arrives here it is because the user tried to access the server directly.

			logger.serious(data)
			return res.status(401).json({ message: 'Email já cadastrado em outro usuário' });
		}

		if (dataPolicyCheck === undefined) {
			const data = {
				message: "Tentativa de registro sem o dataPolicyCheck",
				path: function_path,
			} // OBS The validations are done in the front end, if this validation arrives here it is because the user tried to access the server directly.

			logger.serious(data)
			return res.status(401).json({ message: 'dataPolicyCheck não fornecido' })
		}

		if (dataPolicyCheck === false || dataPolicyCheck === "false") {
			const data = {
				message: "Tentativa de registro com o dataPolicyCheck porém falso",
				path: function_path,
			} // OBS The validations are done in the front end, if this validation arrives here it is because the user tried to access the server directly.

			logger.serious(data)
			return res.status(401).json({ message: 'dataPolicyCheck deve ser verdadeiro' })
		}

		const passwordHash = await bcrypt.hash(password, bcryptsaltRounds)

		const user = {
			name,
			email,
			passwordHash,
			dataPolicyCheck
		}
		
		const userDb = await User.create(user)
		/*
		const data = {
			message: "Cadastro de novo usuário",
		}

		logger.info(data)*/
		return res.status(200).json({ message: "Usuário cadastrado com sucesso", redirectTo: "/login" })

	}

	static async getOneByName(req, res) {
		const name = req.body.name

		await getUserByName(name).then((userDB) => {
			if (!userDB.success) {
				res.status(userDB.status).send(userDB)
			} else {
				res.status(userDB.status).send(userDB.userDB)
			}
		})
	}

}