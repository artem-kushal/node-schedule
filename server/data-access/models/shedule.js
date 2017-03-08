'use strict';

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
});

module.exports = mongoose.model('User', User);
