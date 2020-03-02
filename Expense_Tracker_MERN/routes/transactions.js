const express = require('express');
const router = express.Router();
const { getTransactions } = require('../controllers/transactionController');

// router.get('/', (req, res) => res.send('Hello There'));

router.route('/').get(getTransactions);

module.exports = router;