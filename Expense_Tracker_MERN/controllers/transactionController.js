const Transaction = require('../models/Transaction');

// Description: Get all transactions
// Route: ** GET ** /api/v1/transactions
// Access: Public

exports.getTransactions = async (req, res, next) => {

    // Prior to inserting the try catch I used the res.send('GET transaction') to *** Test in POSTMAN ***
    // res.send('GET transaction');

    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });

    }
}

// Description: Add transaction
// Route: ** POST ** /api/v1/transactions
// Access: Public

exports.addTransaction = async (req, res, next) => {

    // Prior to inserting the try catch I used the res.send('POST transaction') to *** Test in POSTMAN ***
    // res.send('POST transaction');

    try {
        
        const { text, amount } = req.body;
        
        const transaction = await Transaction.create(req.body);
        
        return res.status(201).json({
            success: true,
            data: transaction
        });

    } catch (err) {

        if(err.name === 'ValidationError') {

            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            })

        } else {

            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });

        }


    }

}

// Description: Delete transaction
// Route: ** DELETE ** /api/v1/transactions/:id
// Access: Public

exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transaction');
}