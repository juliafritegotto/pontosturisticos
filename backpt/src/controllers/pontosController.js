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
        let sql = 'SELECT * FROM pontosturisticos';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send('Post fetched');
        });
    },

    show: (req, res) => {
        let sql = `SELECT * FROM pontosturisticos WHERE pkPonto=${req.params.pkPonto}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post fetched');
        });
    }

};