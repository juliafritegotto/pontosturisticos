const express = require('express');
const routes = express.Router();

const pontosController = require('./controllers/pontosController');
const dbController = require('./controllers/dbController');

//User routes
routes.post('/pontos', pontosController.create);
routes.get('/pontos', pontosController.index);
routes.get('/pontos/:pkPonto', pontosController.show);

//DB routes
routes.get('/createdb', dbController.createdb);
routes.get('/createtable', dbController.createtable);


module.exports = routes;