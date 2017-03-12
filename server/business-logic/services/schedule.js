'use strict';

const BaseService = require('./base');
const ScheduleRepository = require('../../data-access/repositories/schedule');
const Schedule = require('../models/schedule');

class ScheduleService extends BaseService {

    constructor() {
        super(ScheduleRepository, Schedule);
    }

}

module.exports = ScheduleService;
