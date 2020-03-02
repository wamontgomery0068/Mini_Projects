// Controller Methods

// Description: Get all transactions
// Route: GET /api/v1/transactions
// Access: Public

exports.getTransactions = (req, res, next) => {
    res.send('GET transaction');
}

// Description: Add transaction
// Route: POST /api/v1/transactions
// Access: Public

exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

// Description: Delete transaction
// Route: DELETE /api/v1/transactions/:id
// Access: Public

exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transaction');
}