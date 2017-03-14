'use strict';

const logger = require('../../shared/logger');
const nodemailer = require("nodemailer");
const aws = require('aws-sdk');
const transporter = nodemailer.createTransport({
    SES: new aws.SES({apiVersion: '2010-12-01'})
});

// const transporter = nodemailer.createTransport({debug: true});

class EmailHandler {
    constructor(email, message) {
        this._email = email;
        this._message = message;
    }

    start() {
        transporter.sendMail({
            from: 'fire-111@mail.ru',
            to: 'stdart9@gmail.com',
            subject: 'hello',
            html: '<b>hello world!</b>',
            text: 'hello world!'
        });
        // logger.info(this._message);
    }
}

module.exports = EmailHandler;
