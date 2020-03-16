const mongoose = require('mongoose');

// WAM: **** User Schema ****
const UserSchema = new mongoose.Schema({

    // Name Field
    name: {
        type: String,
        required: True
    },

    // Email Field
    email: {
        type: String,
        required: True
    },

    // Password Field
    password: {
        type: String,
        required: True
    },

    // Date Field
    date: {
        type: Date,
        default: Date.now
    }

});

const userModel = mongoose.model('userModel', UserSchema);

module.exports = userModel;

