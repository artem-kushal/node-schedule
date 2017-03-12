'use strict';

class Schedule {
  constructor (id, interval, date, email, message) {
    this.id = id;
    this.interval = interval;
    this.date = date;
    this.email = email;
    this.message = message;
  }

  static parse (dbModel) {
    return new Schedule(
      dbModel._id, 
      dbModel.interval, 
      dbModel.date, 
      dbModel.email, 
      dbModel.message
    );
  }
}

module.exports = Schedule;
