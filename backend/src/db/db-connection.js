const dotenv = require('dotenv');
dotenv.config();
const mysql2 = require('mysql2');

class DBConnection {
    constructor() {
        console.log('Connecting to database:', process.env.DB_DATABASE);
        this.db = mysql2.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        });

        this.checkConnection();
    }

    checkConnection() {
        this.db.getConnection((err, connection) => {
            if (err) {
                console.error('Database connection error:', err);
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('Database connection was closed.');
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    console.error('Database has too many connections.');
                }
                if (err.code === 'ECONNREFUSED') {
                    console.error('Database connection was refused.');
                }
            } else {
                console.log('Database connected successfully to:', process.env.DB_DATABASE);
                connection.release();
            }
        });
    }

    query = async (sql, params) => {
        return new Promise((resolve, reject) => {
            this.db.query(sql, params, (error, results) => {
                if (error) {
                    console.error('Query error:', error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

// like ENUM
const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409
});


module.exports = new DBConnection().query;