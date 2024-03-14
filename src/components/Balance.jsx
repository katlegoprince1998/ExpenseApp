import React, { useContext } from 'react';
import { GlobalContext } from '../constext/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // Filter transactions based on type and calculate totals for expenses and incomes
    const { expenses, incomes } = transactions.reduce((acc, item) => {
        if (item.transType === 'expense') {
            acc.expenses += parseFloat(item.amount);
        } else if (item.transType === 'income') {
            acc.incomes += parseFloat(item.amount);
        }
        return acc;
    }, { expenses: 0, incomes: 0 });

    // Calculate balance by subtracting expenses from incomes
    const balance = incomes - expenses;

    return (
        <div className='grid bg-heading w-32 rounded-md shadow-2xl p-2 justify-center'>
            <h1 className='text-mono text-sm font-extrabold text-gray-500'>Balance</h1>
            <span className='text-mono text-xl font-bold'>{balance.toFixed(2)}</span>
        </div>
    );
};

export default Balance;
