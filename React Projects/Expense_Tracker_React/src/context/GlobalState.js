import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
// ** Hard Coded Examples **
// const initialState = {
//     transactions: [
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//     ]
// };

const initialState = {
    transactions: []
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // ** Actions **
    // These Actions are going to make calls to our Reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // ** Actions **
    // These Actions are going to make calls to our Reducer
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
    
        <GlobalContext.Provider value = {{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )

}