const meetRouter = require('express').Router();

module.exports = meetRouter;

const {getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting} = require('./db');

meetRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'))
})

meetRouter.post('/', (req, res, next) => {
    let newMeet = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeet);
})

meetRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})