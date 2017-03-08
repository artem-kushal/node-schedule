'use strict';

const express = require('express');

class BaseCrudController {

    constructor(Service) {
        this._router = express.Router();
        this._service = new Service();
        this._registerRoutes(this._router);
    }

    get(req, res, next) {
      this._service.get(req.query)
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          return next(error);
        });
    }

    create(req, res, next) {
      this._service.create(req.body)
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          return next(error);
        });
    }

    delete(req, res, next) {
      return next();
    }

    _registerRoutes(router){
        router.get('/', this.get.bind(this));
        router.post('/create', this.create.bind(this));
        router.post('/delete', this.delete.bind(this));
    }

    get Router() {
        return this._router;
    }
}

module.exports = BaseCrudController;
