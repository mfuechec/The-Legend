const password = require('../passwords.config.ts');

module.exports = {
    host: 'recipebook.cpahaehounti.us-east-2.rds.amazonaws.com',
    user: 'password',
    password: password.dbPassword,
    database: 'recipebook',
    port: 3306
};