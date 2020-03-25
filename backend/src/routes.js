const express = require('express');
const ongController = require('./controllers/ong-controller');
const incidentController = require('./controllers/incident-controller');
const profileController = require('./controllers/profile-controller');
const sessionController = require('./controllers/session-controller');


const routes = express.Router();

const connection = require('./database/connection');

routes.get('/ongs', async (request, response) =>{
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});


routes.post('/session', sessionController.create)

routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index)
module.exports = routes;