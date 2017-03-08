'use strict';

const BaseCrudController = require('./base-crud');
const ScheduleService = require('../../business-logic/services/schedule');

class ScheduleController extends BaseCrudController {

    constructor() {
        super(ScheduleService);
    }

}

module.exports = ScheduleController;
