'use strict';

const BaseCrudController = require('./base-crud');
const ScheduleService = {};

class ScheduleController extends BaseCrudController {

    constructor() {
        super(ScheduleService);
    }

}

module.exports = ScheduleController;
