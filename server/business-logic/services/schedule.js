'use strict';

const BaseService = require('./base');
const ScheduleRepository = require('../../data-access/repositories/schedule');

class ScheduleService extends BaseService {

    constructor() {
        super(ScheduleRepository);
    }

}

module.exports = ScheduleService;
