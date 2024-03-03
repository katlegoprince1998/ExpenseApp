import React, { useContext } from 'react'
import { GlobalContext } from '../constext/GlobalState'

const Income = () => {
  const {transactions} = useContext(GlobalContext);

  const income = transactions
  .filter(item => item.transType === 'income') // Filter based on transType
  .reduce((acc, item) => acc + item.amount, 0) // Sum the amounts
  .toFixed(2);
  return (
    <div className='grid bg-green-600 w-32 rounded-md shadow-2xl p-2 justify-center'>
    <h1  className='text-mono text-sm font-extrabold text-gray-300'>Income</h1>
    <span className='text-mono text-2xl text-heading font-bold'>R{income}</span>
 </div>
  )
}

export default Income
