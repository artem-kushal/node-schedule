'use strict';

const BaseService = require('./base');
const ScheduleRepository = require('../../data-access/repositories/schedule');
const scheduler = require('../sheduler');
const Schedule = require('../models/schedule');


class ScheduleService extends BaseService {

    constructor() {
        super(ScheduleRepository, Schedule);
    }

    create (...args) {
        const self = this;

        return new Promise((resolve, reject) => {
            self._repository.create(...args).then(result => {
                const schedule = self._model.parse(result);
                
                scheduler.addSchedule(schedule);
                resolve(schedule);
            }).then(err => {
                reject(err);
            })
        });
    }

    delete (id) {
        const self = this;

        return new Promise((resolve, reject) => {
            self._repository.deleteById(id).then(result => {
                const schedule = self._model.parse(result);
                
                scheduler.deleteShedule(schedule);
                resolve(schedule);
            }).then(err => {
                reject(err);
            })
        });
    }

}

module.exports = ScheduleService;
