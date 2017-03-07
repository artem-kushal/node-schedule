'use strict';

const express = require('express');
const Router = require('./router');
const bodyParser = require('body-parser');

class Application {
    constructor(config) {
        this._app = express();
        this._config = config;
        this._registerMiddlewares(this._app);

        let router = new Router(this._app);
        router.Initialize(this._app);
    }

    _registerMiddlewares(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
    }

    get ExpressApp() {
        return this._app;
    }
}

module.exports = Application;
