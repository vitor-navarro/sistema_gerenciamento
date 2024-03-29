const { Sequelize } = require('sequelize')

const databaseName = process.env.DATABASE_NAME
const databaseUser = process.env.DATABASE_USER_NAME
const databasePassword = process.env.DATABASE_PASSWORD
const databaseHost = process.env.DATABSE_HOST

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword,{
    host: databaseHost,
    dialect: 'mysql',
	logging: true/*false*/,/*(message) => {
		if (message.includes('Error')) {
		  console.error(message);
		}
	  },*/
	  pool: {
		max: 20, // max 30 per connection
		min: 0,
		acquire: 30000,
		idle: 10000,
	  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado ao database\n\r ' + databaseName)

  })
  .catch((error) => {
    console.log("Erro ao conectar ao database\n\r", error)
  })

module.exports = sequelize