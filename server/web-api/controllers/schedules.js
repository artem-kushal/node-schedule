'use strict';

const BaseController = require('./base');
const ScheduleService = require('../../business-logic/services/schedule');
const BadRequestHttpError = require('../errorHandlers/httpErrors/badRequest');

class ScheduleController extends BaseController {

    constructor() {
        super(ScheduleService);
    }

    create(req, res, next) {
        const {interval, date, email, message} = req.body;
        if (interval === null || interval === undefined || !date || !email || !message) {
            let error = new BadRequestHttpError();
            next(error);
        } else {
            this._service.create(interval, date, email, message).then(result => {
                res.send(result);
            }).catch(error => {
                return next(error);
            });
        }
    }

}

module.exports = ScheduleController;
