export default (state, action) => {
    switch(action.type) {

        case 'DELETE_TRANSACTION':
            return {
                // Use Spread Operator here and then send the current state
                ...state,
                // For each transaction, it takes in an arrow function, dot ID is not equal to the action dot payload
                transactions: state.transactions.filter(transaction => transaction.id !== 
                action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

// ** Notes on AppReducer **
// Reducer is just a way to change your state and send it down to your component to your application.
// We can't just change it we have to create a new state and send it down.