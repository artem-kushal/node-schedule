'use strict';

const config = require('../configuration');
const express = require('express');
const path = require('path');
const ErrorHandlerMiddleware = require('./middlewares/error-handler');
const NotFoundHttpError = require('./errorHandlers/httpErrors/notFoundError');
const SchedulesController = require('./controllers/schedules');

class Router {
	constructor() {
		this._controllers = [{
			path: '/shedules',
			controller: new SchedulesController()
		}];
	}

	_registerPublicMiddlewares(app) {
		app.use(express.static(__dirname + '/public'));
	}

	_registerClientRouterPaths(app) {
		app.get('/*', (req, res, next) => {
			if (req.originalUrl.startsWith(config.get('apiPrefix'))) {
				return next();
			}
			if (req.originalUrl === '/') {
				return res.sendFile(path.resolve(__dirname + '/public/index.html'));
			}
			return next(new NotFoundHttpError());
		});
	}

	_registerControllers(app) {
		this._controllers.forEach(route => {
			app.use(config.get('apiPrefix') + route.path, route.controller.Router);
		});
	}

	_registerErrorHandling(app) {
		let errorHandlingMiddleware = new ErrorHandlerMiddleware();
		app.use(errorHandlingMiddleware.Router);
		errorHandlingMiddleware.RegisterErrorHandlers(app);
	}

	Initialize(app) {
		this._registerPublicMiddlewares(app);
		this._registerControllers(app);
		this._registerClientRouterPaths(app);
		this._registerErrorHandling(app);
	}

}

module.exports = Router;
