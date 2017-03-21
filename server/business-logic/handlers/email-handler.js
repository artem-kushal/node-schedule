'use strict';

const logger = require('../../shared/logger');
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testnodemailer12@gmail.com',
        pass: 'Kyuz3RtJ'
    }
});

class EmailHandler {
    constructor(email, message) {
        this._email = email;
        this._message = message;
    }

    start() {
        transporter.sendMail({
            to: 'stdart9@gmail.com',
            subject: 'Message from scheduler',
            html: '<b>hello world!</b>',
            text: 'hello world!'
        });
        logger.info(this._message);
    }
}

module.exports = EmailHandler;
