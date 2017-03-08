'use strict';

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const Schedule = new Schema({
    interval: {type: Number, required: true},
    date: {type: Date, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
});

module.exports = mongoose.model('Schedule', Schedule);
