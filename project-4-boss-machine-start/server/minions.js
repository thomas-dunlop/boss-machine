const express = require('express');
const minionsRouter = express.Router();
const utils = require('./db.js');

minionsRouter.param('minionId', (req, res, next, id) => {
    let foundMinion = utils.getFromDatabaseById('minions', id);
    if (foundMinion) {
        req.minion = foundMinion; 
        next();
    } else {
        res.status(404).send();
    }
})

minionsRouter.get('/', (req, res) => {
    res.send(utils.getAllFromDatabase('minions'));
})

minionsRouter.post('/', (req, res) => {
    res.status(201).send(utils.addToDatabase('minions', req.body))
})

minionsRouter.get('/:minionId', (req, res) => {
    res.send(req.minion);
})

minionsRouter.put('/:minionsId', (req, res) => {
    let newInstance = utils.updateInstanceInDatabase('minions', req.body);
    if (newInstance === null){
        res.status(404).send();
    } else {
        res.send(newInstance);
    }
})

minionsRouter.delete('/:minionsId', (req, res) => {
    let result = utils.deleteFromDatabasebyId('minions', req.params.minionsId);
    if (result === true){
        res.status(204).send();
    } else {
        res.status(404).send()
    }
})

module.exports = minionsRouter;