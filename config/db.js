var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Icecream11&',
    database: 'db',
    port: '3306'
});

module.exports = db;