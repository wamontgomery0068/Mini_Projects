// Dependency's Required
const mongoose = require('mongoose');

// Create Schema
const TransactionSchema = new mongoose.Schema({
    // First Field
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    // Second Field
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    // Third Field
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);