const { Router } = require('express');

const PipedriveController = require('../controllers/PipedriveController');
const BlingController = require('../controllers/BlingController');

const routes = Router();

routes.get('/pipedrive', PipedriveController.index);

routes.get('/bling', BlingController.index);

module.exports = routes;