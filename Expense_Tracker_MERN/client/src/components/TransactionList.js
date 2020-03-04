import React, { useContext, useEffect } from 'react'

// Imported Components
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(context);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => ( <Transaction key = {transaction.id} transaction = 
                {transaction} />))}
            </ul>
        </>
    )
}
