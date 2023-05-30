// const mysql = require("mysql");

// let conexao  = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: 'gilson779023',
//     database: 'Pulseira'
// });                                                             CONEXAO ALTERNATIVA PARA O MYSQL
  
// conexao.connect((err) => {
//     if (err) {
//       console.log("Database Connection Failed !!!", err);
//     } else {
//       console.log("connected to Database");
//     }
// });

const Sequelize = require("sequelize");

const sequelize = new Sequelize('Pulseira' ,'root', 'gilson779023',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize : sequelize
}






