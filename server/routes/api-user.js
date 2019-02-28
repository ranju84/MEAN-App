const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const userrouter = express.Router();

const secretKey = 'Ranju##Secret!';

userrouter.get('/', (req, res) => {
    res.send('From user routes');
});

userrouter.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);

    user.save((error, registeredUser) => {
        if(error){
            console.log('user registration error: ' + error);
            res.status(500).send('User registration failed');
        }else{
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, secretKey);
            res.status(200).send({token});
        }
    });
});

userrouter.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log('login email error: '+ error);
            res.status(500).send('Login failed');
        }else{
            if(!user){
                res.status(401).send('Invalid email');
            }else if(user.password != userData.password){
                res.status(401).send('Invalid password');
            }else{
                let payload = { subject: user._id };
                let token = jwt.sign(payload, secretKey);
                res.status(200).send({token});
            }
        }
    });
});

module.exports.userrouter = userrouter;