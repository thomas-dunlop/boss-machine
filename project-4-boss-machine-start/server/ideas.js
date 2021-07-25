const express = require('express');
const ideasRouter = express.Router();
const utils = require('./db.js');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

ideasRouter.param('ideaId', (req, res, next, id) => {
    let foundIdea = utils.getFromDatabaseById('ideas', id);
    if (foundIdea) {
        req.idea = foundIdea; 
        next();
    } else {
        res.status(404).send();
    }
})

ideasRouter.get('/', (req, res) => {
    res.send(utils.getAllFromDatabase('ideas'));
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res) => {
    res.status(201).send(utils.addToDatabase('ideas', req.body))
})

ideasRouter.get('/:ideaId', (req, res) => {
    res.send(req.idea);
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res) => {
    let newInstance = utils.updateInstanceInDatabase('ideas', req.body);
    if (newInstance === null){
        res.status(404).send();
    } else {
        res.send(newInstance);
    }
})

ideasRouter.delete('/:ideaId', (req, res) => {
    let result = utils.deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (result === true){
        res.status(204).send();
    } else {
        res.status(404).send()
    }
})

module.exports = ideasRouter;