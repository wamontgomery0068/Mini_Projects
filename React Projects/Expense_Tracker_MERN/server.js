// Dependencies Requied
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

// Call the Function
connectDB();

const transactions = require('./routes/transactions');

// Initialize Application
const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

// Create a Simple Route to test in PostMan prior to building a transaction file
// app.get('/', (req, res) => res.send('Hakuna Matata'));

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port 
${PORT}`.yellow.bold));