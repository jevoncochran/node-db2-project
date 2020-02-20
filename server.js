const express = require('express');

const carsRouter = require('./cars/carRouter');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h3>DB Helpers with knex</h3>');
})

module.exports = server;