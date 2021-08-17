
const db = require('../connection');

module.exports = {
    //Create database
    createdb: (req, res) => {
        let sql = 'CREATE DATABASE dbpontosturisticos';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Database created');
        });
    },

    //Create table 
    createtable: (req, res) => {
        let sql = 'CREATE TABLE pontosturisticos (pkPonto int AUTO_INCREMENT, nome VARCHAR(100), uf VARCHAR(2), cidade VARCHAR(100), descritivo VARCHAR(100), referencia VARCHAR(255),   PRIMARY KEY (pkPonto))';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('pontosturisticos table created');
        });
    }
}