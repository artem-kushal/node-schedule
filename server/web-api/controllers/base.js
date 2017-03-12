'use strict';

const express = require('express');

class BaseController {

    constructor(Service) {
        this._router = express.Router();
        this._service = new Service();
        this._registerRoutes(this._router);
    }

    getAll(req, res, next) {
        this._service.getAll().then(result => {
            res.send(result);
        }).catch(error => {
            return next(error);
        });
    }

    create(req, res, next) {
        this._service.create(req.body).then(result => {
            res.send(result);
        }).catch(error => {
            return next(error);
        });
    }

    delete(req, res, next) {
        this._service.delete(req.body.id).then(result => {
            res.send(result);
        }).catch(error => {
            return next(error);
        });
    }

    _registerRoutes(router){
        router.get('/', this.getAll.bind(this));
        router.post('/create', this.create.bind(this));
        router.post('/delete', this.delete.bind(this));
    }

    get Router() {
        return this._router;
    }
}

module.exports = BaseController;
