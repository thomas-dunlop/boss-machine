const express = require('express');
const meetingsRouter = express.Router();
const utils = require('./db.js');

meetingsRouter.get('/', (req, res) => {
    res.send(utils.getAllFromDatabase('meetings'));
})

meetingsRouter.post('/', (req, res) => {
    let newMeeting = utils.createMeeting();
    utils.addToDatabase('meetings', newMeeting);
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res) => {
    utils.deleteAllFromDatabase('meetings')
    res.status(204).send();
})

module.exports = meetingsRouter;