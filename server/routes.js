const express = require('express');
const CandidateController = require('./CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
routes.get('/',(req, res) => {
    res.send('Registrou');
});
module.exports = routes;