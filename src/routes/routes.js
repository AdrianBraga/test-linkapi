const { Router } = require('express');

const IntegrationController = require('../controllers/IntegrationController');
const OportunityController = require('../controllers/OportunityController');

const routes = Router();

routes.get('/bling', IntegrationController.index) //Aqui faz a integracao
routes.get('/pipedrive', OportunityController.index) //Aqui faz a listagem de oportunidades

module.exports = routes;