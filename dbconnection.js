var mysql = require('mysql');
var connstr = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};
var connection = mysql.createPool(connstr);
module.exports = connection;