// config/db.config.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'tablesprint',
    port:'3307'
});

module.exports = pool.promise();
