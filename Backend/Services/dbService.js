// dbService.js

const mysql = require('mysql');

// MySQL database configuration
const dbConfig = {
    host:'localhost',
    user:"root",
    password:'',
    database:'student'
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Handle connection errors
pool.on('error', (err) => {
    console.error('MySQL Pool Error:', err);
});

// Wrap getConnection with a promise
function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            resolve(connection);
        });
    });
}

async function executeQuery(sql, values) {
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, results) => {
            connection.release(); // dispose/release connection after query
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getConnection,
    executeQuery
};
