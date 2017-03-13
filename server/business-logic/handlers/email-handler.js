'use strict';

const logger = require('../../shared/logger');

class EmailHandler {
  constructor (email, message) {
    this._email = email;
    this._message = message;
  }

  start () {
    logger.info(this._message);
  }
}

module.exports = EmailHandler;
