const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

addToFavorite = function (data, database, callback) {
    console.log('It Works!')
}

module.exports.addToFavorite = addToFavorite;