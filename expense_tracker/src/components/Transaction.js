import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    // If the transaction amount is less than 0 then the amount will have a '-' sign, if the amount is not
    // less than 0 then the amount will have a '+' sign.

    const sign = transaction.amount < 0 ? '-' : '+';

    return (

        <li className = {transaction.amount < 0 ? 'minus' : 'plus'}>

            {transaction.text} 
            
            <span> {sign} ${Math.abs(transaction.amount)} </span>
            
            <button 
                className ="delete-btn" 
                onClick = {() => deleteTransaction(transaction.id)}> x </button>

        </li>
    )
}
