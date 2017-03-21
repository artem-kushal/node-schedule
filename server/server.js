'use strict';

const http = require('http');
const config = require('./configuration');
const Application = require('./web-api/app');
const Database = require('./data-access/database');
const logger = require('./shared/logger');
const scheduler = require('./business-logic/sheduler');
const ScheduleService = require('./business-logic/services/schedule');

const EmailHandler = require('./business-logic/handlers/email-handler');

class Server {
    constructor() {
        this._app = new Application(config);
        this._server = http.Server(this._app.ExpressApp);
    }

    start() {
        // new EmailHandler().start();
        Database.connect().then(() => this._startServer()).catch((err) => {
            logger.error(err.message);
        });
        // this._startServer()
    }

    _startServer() {
        scheduler.init(ScheduleService);
        this._server.listen(config.get('port'), () => {
            logger.info('Application is listening on port ' + config.get('port'));
        });
    }
}

const server = new Server();
server.start();
