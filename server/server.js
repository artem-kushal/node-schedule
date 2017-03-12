'use strict';

const http = require('http');
const config = require('./configuration');
const Application = require('./web-api/app');
const Database = require('./data-access/database');
const logger = require('./shared/logger');

class Server {
    constructor() {
        this._app = new Application(config);
        this._server = http.Server(this._app.ExpressApp);
    }

    start() {
        Database.connect().then(() => this._startServer()).catch((err) => {
            logger.error(err.message);
        });
        // this._startServer()
    }

    _startServer() {
        this._server.listen(config.get('port'), () => {
            logger.info('Application is listening on port ' + config.get('port'));
        });
    }
}

const server = new Server();
server.start();
