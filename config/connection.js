// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// DO NOT SAVE TO A VARIABLE
require('dotenv').config();

// create connection to our database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;