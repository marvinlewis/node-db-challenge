const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const projectRouter = require('./data/projectRouter');
const resourceRouter = require('./data/resourceRouter');
const taskRouter = require('./data/taskRouter');

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/project', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: '==!! SERVER GET !!=='
    })
})

module.exports = server;