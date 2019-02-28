const express = require('express');
const mongoose = require('mongoose');

const db = 'mongodb+srv://RanjanGayen_84:RanjuDefaultUser2019@cluster0-6k25v.mongodb.net/learningdb';
mongoose.connect(db, { useNewUrlParser: true }, err =>{
    if(err){
        console.log('Connection error: ' + err);
    }else{
        console.log('Connected to mongodb');
    }
})

const apirouter = express.Router();
const userapirouter = require('./api-user').userrouter;

apirouter.get('/', (req, res) => {
    res.send('Hello from API');
});
apirouter.use('/user', userapirouter);

module.exports = apirouter;