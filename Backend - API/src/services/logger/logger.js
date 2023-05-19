const Log = require("../../models/Log");

async function gravar(data) {
	try {
		const log = await Log.create({
			severity_level: data.level,
			message: data.message,
			error: data.error,
			extra: data.extra,
		})

		//console.log("Log gravado no banco de dados:", log.toJSON());
		return log;
	} catch (error) {
		console.log("Erro ao gravar o log no banco de dados:", error);
		throw error;
	}
}

const log_data = {
	// log destined to know if someone is trying to circument the system
	serious: async function (data) {
		if (!data.message) {
			data.message = "Inserido sem mensagem verificar"
			console.log("inserido sem mensagem - serious")
		}

		if (!data.path) {
			data.path = "Inserido sem path verificar"
			console.log("inserido sem path")
		}

		const seriousObj = {
			level: "serious",
			message: data.message,
			error: data.error || "", //optional
			extra: "path:" + data.path,
		};

		try {
			const log = await gravar(seriousObj);
			return log
		} catch (error) {
			throw error;
		}
	},

	error: async function (data) {
		if (!data.message) {
			data.message = "Inserido sem mensagem verificar"
			console.log("inserido sem mensagem - error")
		}

		if (!data.error) {
			data.error = "Inserido sem error verificar"
			console.log("inserido sem error - error")
		}

		const errorObj = {
			level: "error",
			message: data.message,
			error: data.error,
		}
		try {
			const log = await gravar(errorObj)
			return log
		} catch (error) {
			throw error
		}
	},

	warning: async function (data) {
		if (!data.message) {
			data.message = "Inserido sem mensagem verificar"
			console.log("inserido sem mensagem - warning")
		}

		const warningObj = {
			level: "warning",
			message: data.message,
			error: data.error || "", //optinal
		}
		try {
			const log = await gravar(warningObj)
			return log
		} catch (error) {
			throw error
		}
	},

	info: async function (data) {
		if (!data.message) {
			data.message = "Inserido sem mensagem verificar"
			console.log("inserido sem mensagem - info")
		}

		const infoObj = {
			level: "info",
			message: data.message,
		} //exclude after 7 days, or in dump
		try {
			const log = await gravar(infoObj)
			return log
		} catch (error) {
			throw error
		}
	},

	//For monitoring if you need it, or you want to know how fast the system is
	performance: async function (data) {
		if (!data.message) {
			data.message = "Inserido sem mensagem verificar"
			console.log("inserido sem mensagem - performance")
		}

		if (!data.path) {
			data.path = "Inserido sem path verificar"
			console.log("inserido sem error - performance")
		}

		const performanceObj = {
			level: "performance",
			message: data.message,
			extra: data.path,
		}
		try {
			const log = await gravar(performanceObj)
			return log
		} catch (error) {
			throw error
		}
	},

	// importance level 1 or 0 please
	other: async function (data) {
		if (!data.message) {
			data.message = "Inserido sem mensagem verificar"
			console.log("inserido sem mensagem - other")
		}

		if (!data.importance_level) {
			data.importance_level = "Inserido sem importance_level verificar"
			console.log("inserido sem importance_level")
		}


		if (!data.aditionalInfo) {
			data.aditionalInfo = "Inserido sem aditionalInfo verificar"
			console.log("inserido sem aditionalInfo")
		}

		//exclude after 7 days, or in dump
		const otherObj = {
			level: "other",
			message: data.message,
			extra: ("Importance level:" + data.importance_level || "0") + " Aditional Info:" + data.aditionalInfo,
		}
		try {
			const log = await gravar(otherObj)
			return log
		} catch (error) {
			throw error
		}
	}

};

module.exports = log_data;