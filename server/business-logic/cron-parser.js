'use strict';

const Intervals = require('./constants/interval-constants');

// '* * * * * *'
// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11
// Day of Week: 0-6

class CronTimeParser {

  static parse(interval, date) {
    switch(interval) {
      case Intervals.ONCE_MONTH:
        return `* ${date.getMinutes()} ${date.getHours()} ${date.getDate()} * *`;
      case Intervals.ONCE_WEEK:
        return `* ${date.getMinutes()} ${date.getHours()} * * ${date.getDay()}`;
      case Intervals.ONCE_DAY:
        return `* ${date.getMinutes()} ${date.getHours()} * * *`;
      case Intervals.CERTAIN_DAY:
        return date;
      default: 
        return '';
    }
  }
}

module.exports = CronTimeParser;
