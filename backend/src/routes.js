const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
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

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}

),incidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.index)
module.exports = routes;