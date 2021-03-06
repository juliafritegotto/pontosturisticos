const db = require('../connection');

module.exports = {
    create: (request, response) => {
        const { nome, uf, cidade, descritivo, referencia } = request.body;

        let user = { nome, uf, cidade, descritivo, referencia };
        let sql = 'INSERT INTO pontosturisticos SET ?';
        let query = db.query(sql, user, (err, result) => {
            if (err) throw err;
            console.log(result);
            response.status(201).send('Ponto turístico adicionado');
        });
    },

    index: (req, res) => {
        const { page = 0, pageSize = 100, nome } = req.params;
        let sql = `SELECT * FROM pontosturisticos ORDER BY pkPonto DESC LIMIT ${pageSize} OFFSET ${page * pageSize} `;
        if(nome) {
            sql += ` WHERE nome = ${nome}`
       }
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results);
        });
    },

    show: (req, res) => {
        let sql = `SELECT * FROM pontosturisticos WHERE pkPonto=${req.params.pkPonto}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(results);
        });
    }

};