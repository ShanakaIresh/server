const sql = require('mysql2')
const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'userdetails',
    dateStrings: true
})

module.exports = pool.promise()