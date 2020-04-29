const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!')
})