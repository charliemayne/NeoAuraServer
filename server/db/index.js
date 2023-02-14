const mysql = require("mysql");

// replaces traditonal connect method?
const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'testDB',
    host: 'localhost',
    port: '3306'
});

let testdb = {};

testdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM testTable`, (err, results) => {
            if (err) 
                return reject(err);

            return resolve(results);
        });
    });
};

testdb.one = (name) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM testTable WHERE name = ?`, [name], (err, results) => {
            if (err) 
                return reject(err);
            
            return resolve(results[0]);
        });
    });
};

module.exports = testdb;