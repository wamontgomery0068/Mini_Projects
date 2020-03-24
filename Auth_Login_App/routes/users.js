// Dependency's Required
const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/userModel');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handler
router.post('/register', (req, res) => {

    const { name, email, password, password2 } = req.body;

    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields'})
    };

    // Check if passwords match
    if(password !== password2) {
        errors.push({ msg: 'Passwords do not match'})
    };

    // Check the password length
    if(password.length < 6) {
        errors.push({ msg: 'Password must be greater than 6 characters'})
    };

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // WAM: **** If Validation has Passed ****
        User.findOne({ email: email }).then(user => {
            // Check 4 Specific User
            if(user) {
                // WAM: **** Create an Error Message if User is Already Registered ****
                errors.push({ msg: 'Email is already registered' });
                // User Exists
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            }
        });
    }

});


module.exports = router;