const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '8080',
    user: 'root',
    password: 'Ubuntu100%',
    database: 'peliculas'
});

module.exports = connection;


// host: process.env.DB_HOST || 'localhost',
// port: process.env.DB_PORT || '3306',   
// user: process.env.DB_USER,
// password: process.env.DB_PASS,
// database: process.env.DB_NAME