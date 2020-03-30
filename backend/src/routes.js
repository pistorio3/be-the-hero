const express = require('express'); //Importa o Express

const OngController = require('./controllers/OngController'); //Importa o Controlador da ONG
const IncidentController = require('./controllers/IncidentController'); //Importa o Controlador dos Incidents
const ProfileController = require('./controllers/ProfileController'); //Importa o Controlador dos Profiles
const SessionController = require('./controllers/SessionController'); //Importa o Controlador dos Profiles

const routes = express.Router(); 

//Rota para Login
routes.post('/sessions', SessionController.create);

// Rota para listagem de ONGs
routes.get('/ongs', OngController.index); 

// Rota de cadastro de ONGs
routes.post('/ongs', OngController.create);


//Rota para listagem de Incidents por Ong
routes.get('/profile',ProfileController.index);


// Rota de listagem de Incidents
routes.get('/incidents', IncidentController.index);

// Rota de cadastro de Incidents
routes.post('/incidents', IncidentController.create);

//Rota de Exclusão de Incidents
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;