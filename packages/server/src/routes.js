const express = require("express");
const { celebrate, Joi, Segments } = require('celebrate'); 

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}), SessionController.store);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown(),

    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

module.exports = routes;
