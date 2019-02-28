const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    phonecountrycode: Number,
    dob: Date,
    gender: String,
    country: String,
    bloodgroup: String
});

module.exports = mongoose.model('user', userSchema, 'users');