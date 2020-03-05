// Dependency's Required
const express = require('express');

// Basic Express Server
const app = express();

// Create a Port for our App to run on
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));