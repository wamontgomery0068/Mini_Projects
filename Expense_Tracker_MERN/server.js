// Dependencies Requied
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path: './config/config.env'});

// Initialize Application
const app = express();

// Create a Simple Route
app.get('/', (req, res) => res.send('Hakuna Matata'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port 
${PORT}`.yellow.bold));