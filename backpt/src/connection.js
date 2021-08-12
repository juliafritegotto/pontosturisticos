const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dbpontosturisticos'

});

//Connect 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql connected');

});

module.exports = db;