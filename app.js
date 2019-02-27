'use strict';

/**
 * Module dependencies.
 */
import express from 'express';
import config from './config';

import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';

/**
 * Express.js server.
 */
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const server = require('http').Server(app);

/**
 * Socket.io websockets.
 */
const io = require('socket.io')(server); // add socket.io 'websockets'.
server.listen(config.port.socket); // listen for websockets on port 6660

io.on('connection', socket => {
    console.log('[*] Websocket connection found!' + '\n');

    const client = require('./libraries/client/client_middleware');

});

export default app;