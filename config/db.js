const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myblogs',
    port: 3306,
    dateStrings: true
})

module.exports = pool.promise()