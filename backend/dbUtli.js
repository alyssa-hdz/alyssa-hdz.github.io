const mysql = require('mysql2')
const db =mysql.createConnection({
    host:'sql5.freesqldatabase.com',
    user: ' sql5776271',
    password: 'cjaT6QQhsc',
    database: 'Final Project'
})

module.exports =db.connection;