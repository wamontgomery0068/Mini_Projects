import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

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
    transactions: [],
    error: null,
    loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getTransactions() {
        try {

            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
            
        } catch (err) {

            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
            
        }
    }

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
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )

}