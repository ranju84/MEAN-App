const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    person: {
        gender: String,
        dob: Date,
        bloodgroup: String
    },
    contact: {
        country: String,
        phonecountrycode: String,
        phone: Number
    },
    email: String,
    password: String
});

module.exports = mongoose.model('user', userSchema, 'users');