'use strict';

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Schedule = new Schema({
    interval: {type: Number, required: true},
    date: {type: Date, required: true},
    email: {type: String, required: true,},
    message: {type: String, required: true}
});

Schedule.path('email').validate(email => {
    return EMAIL_REGEX.test(email);
}, 'Invalid email field');

module.exports = mongoose.model('Schedule', Schedule);
