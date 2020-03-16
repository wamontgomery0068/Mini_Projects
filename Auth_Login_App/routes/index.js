// Dependency's Required
const express = require('express');
const router = express.Router();

// ** Route Methods**
router.get('/', (req, res) => res.render('welcome'));


module.exports = router;