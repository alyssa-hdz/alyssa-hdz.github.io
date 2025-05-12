const mysql = require('mysql2/promise');
const db =mysql.createPool({
    host:'sql5.freesqldatabase.com',
    user:'sql5776271',
    password:'cjaT6QQhsc',
    database: 'sql5776271'
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed');
        console.error(err);
        return;
    }
    console.log('Connected to the database.');
    
    // Important: release the connection back to the pool
    connection.release();
});

module.exports =db;

/*
Host: sql5.freesqldatabase.com
Database name: sql5776271
Database user: sql5776271
Database password: cjaT6QQhsc
Port number: 3306
 */