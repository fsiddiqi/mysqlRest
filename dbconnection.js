var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'fs',
    password: 'fs',
    database: 'fstest'


});
module.exports = connection;