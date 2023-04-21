const pool = require('./conn');

pool.getConnection((err, connection) => {
  if (err) throw err;

  const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;

  connection.query(createTableQuery, (err, results) => {
    connection.release();
    if (err) throw err;

    console.log('Tabela "users" criada com sucesso!');
  });
});