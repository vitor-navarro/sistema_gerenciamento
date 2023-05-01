const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sistemaVini', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
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