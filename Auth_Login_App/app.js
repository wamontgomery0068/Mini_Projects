// Dependency's Required
const express = require('express');
const colors = require('colors');



// Basic Express Server
const app = express();

// ** Routes **
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


// Create a Port for our App to run on
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`.brightBlue));