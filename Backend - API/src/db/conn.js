const { Sequelize } = require('sequelize')

const databaseName = process.env.DATABASE_NAME
const databaseUser = process.env.DATABASE_USER_NAME
const databasePassword = process.env.DATABASE_PASSWORD
const databaseHost = process.env.DATABSE_HOST

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword,{
    host: databaseHost,
    dialect: 'mysql',
	logging:/*false*/(message) => {
		if (message.includes('Error')) {
		  console.error(message);
		}
	  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado ao database\n\r')
  })
  .catch((error) => {
    console.log("Erro ao conectar ao database\n\r", error)
  })

module.exports = sequelize