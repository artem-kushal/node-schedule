'use strict';

const CronJob = require('cron').CronJob;
const CronTimeParser = require('../cron-parser');

class ScheduleJob {
    constructor(id, interval, date, handler) {
        this.id = id;
        this.cronJob = this._createCronJob(interval, date, handler);
    }

    _createCronJob(interval, date, handler) {
        const cronTime = CronTimeParser.parse(interval, date);

        return new CronJob({
            cronTime,
            onTick: function () {
                return handler.start();
            },
            start: true,
            timeZone: 'Europe/Minsk'
        });
    }

    stop() {
        this.cronJob.stop();
    }
}

module.exports = ScheduleJob;
