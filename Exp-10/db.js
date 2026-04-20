const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // change this
    database: '24wh1a05c5_sameeksha' // change this
});

db.connect((err) => {
    if (err) {
        console.error('DB connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

module.exports = db;
