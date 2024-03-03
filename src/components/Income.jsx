// Income.js
import React, { useContext } from 'react';
import { GlobalContext } from '../constext/GlobalState';

const Income = () => {
    const { transactions } = useContext(GlobalContext);

    console.log('Transactions:', transactions); // Log transactions for debugging

    const income = transactions
        .filter(item => item.transType === 'income')
        .reduce((acc, item) => acc + parseInt(item.amount), 0) // Provide initial value of 0
        .toFixed(2);

    return (
        <div className='grid bg-green-600 w-32 rounded-md shadow-2xl p-2 justify-center'>
            <h1 className='text-mono text-sm font-extrabold text-gray-300'>Income</h1>
            <span className='text-mono text-xl text-heading font-bold'>R{income}</span>
        </div>
    );
};

export default Income;
