'use strict';

const BaseRepository = require('./base');
const ScheduleModel = require('../models/shedule');

class ScheduleRepository extends BaseRepository {

    constructor() {
        super(ScheduleModel);
    }

    create(interval, date, email, message) {
        const newSchedule = new ScheduleModel({
            interval, date, email, message,
        });

        return newSchedule.save();
    }

}

module.exports = ScheduleRepository;
