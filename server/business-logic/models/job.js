'use strict';

const CronJob = require('cron').CronJob;

class ScheduleJob {
    constructor(id, date, handler) {
        this.id = id;
        this.cronJob = this._createCronJob(date, handler);
    }

    _createCronJob(date, handler) {
        return new CronJob({
            cronTime: '10 * * * * *',
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
