const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions.js');
const meetingsRouter = require('./meetings.js');
const ideasRouter = require('./ideas.js');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
