require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',   
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = connection;

// Tuve que modificar el MySQL
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
