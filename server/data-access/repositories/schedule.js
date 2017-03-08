'use strict';

const BaseRepository = require('./base');
const ScheduleModel = require('../models/shedule');

class ScheduleRepository extends BaseRepository {

    constructor() {
        super(ScheduleModel);
    }

    create (data) {
      const newSchedule = new ScheduleModel({
        interval: data.interval,
        date: data.date,
        email: data.email,
        message: data.message
      });

      return newSchedule.save().exec();
    }

}

module.exports = ScheduleRepository;
