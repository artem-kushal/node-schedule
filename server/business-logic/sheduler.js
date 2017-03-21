'use strict';

const ScheduleJob = require('./models/job');
const EmailHandler = require('./handlers/email-handler');
const logger = require('../shared/logger');

class Scheduler {

    constructor () {
      this._jobs = [];
    }

    _createShedule (schedule) {
      const emailHandler = new EmailHandler(schedule.email, schedule.message);
      this._jobs.push(new ScheduleJob(schedule.id, schedule.interval, schedule.date, emailHandler));
    }

    init (Service) {
      this._service = new Service();
      this._service.getAll().then(schedules => {
        schedules.forEach(schedule => {
          this._createShedule(schedule);
        });
      }).catch(err => {
        logger.error(err.message);
      });
    }

    addSchedule (schedule) {
      try {
        this._createShedule(schedule);
      } catch(err) {
        logger.error(err.message);
      }
    }

    deleteShedule (schedule) {
      const removedJobIndex = this._jobs.findIndex(job => {
        return job.id === schedule.id;
      });

      this._jobs[removedJobIndex].stop();
      this._jobs.splice(removedJobIndex, 1);
    }

}

module.exports = new Scheduler();
