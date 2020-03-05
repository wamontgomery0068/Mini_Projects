// Dependency's Required
const express = require('express');
const router = express.Router();

// ** Route Methods**
router.get('/', (req, res) => res.send('Hello There'));


module.exports = router;