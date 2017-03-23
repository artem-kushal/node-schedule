'use strict';

const logger = require('../../shared/logger');
const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
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
            to: this._email,
            subject: 'Message from scheduler',
            html: `<b>${this._message}</b>`,
            text: this._message
        });
        logger.info(this._message);
    }
}

module.exports = EmailHandler;
