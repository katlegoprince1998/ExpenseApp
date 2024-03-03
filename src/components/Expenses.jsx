import React, { useContext } from 'react'
import { GlobalContext } from '../constext/GlobalState';

const Expenses = () => {
  const {transactions} = useContext(GlobalContext);
  const expenses = transactions
  .filter(item => item.transType === 'expense') // Filter based on transType
  .reduce((acc, item) => acc + parseInt(item.amount), 0) // Sum the amounts
  .toFixed(2);
  return (
    <div className='grid bg-red-600 w-32 rounded-md shadow-2xl p-2 justify-center'>
       <h1 className='text-mono text-sm font-extrabold text-gray-400'>Expenses</h1>
       <span className='text-mono text-xl text-heading font-bold'>{expenses}</span>
    </div>
  )
}

export default Expenses
