require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'mark', 'password', {
    host: 'localhost', 
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
      },
    });
console.log(process.env.DB_USER);

module.exports = sequelize;
