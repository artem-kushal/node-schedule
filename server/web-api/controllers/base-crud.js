'use strict';

const express = require('express');

class BaseCrudController {

    constructor(service) {
        this._router = express.Router();
        this._service = service;
        this._registerRoutes(this._router);
    }

    get(req, res, next){
      this._service.get(req.query)
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          return next(error);
        });
    }

    create(req, res, next){
      this._validate(req, res, next, ['data'])
        .then(params => {
          let user = this._getCurrentUser(req);
          this._service.create(params.data, user)
            .then(result => {
              res.send(result);
            })
            .catch(error => {
              return next(error);
            });
        });
    }

    update(req, res, next){
      let self = this;
      this._validate(req, res, next, ['id', 'data'])
        .then(params => {
          let user = self._getCurrentUser(req);
          this._service.update(params.data, params.id, user)
            .then(result => {
              res.send(result);
            })
            .catch(error => {
              return next(error);
            });
        });
    }

    delete(req, res, next){
      this._validate(req, res, next, ['id', 'conditions'])
        .then(params => {
          this._service.delete(params.conditions, params.id)
            .then(result => {
              res.send(result);
            })
            .catch(error => {
              return next(error);
            });
        });
    }

    _registerRoutes(router){
        router.get('/', this.get.bind(this));
        router.post('/create', this.create.bind(this));
        router.post('/update', this.update.bind(this));
        router.post('/delete', this.delete.bind(this));
    }

    get Router() {
        return this._router;
    }
}

module.exports = BaseCrudController;
