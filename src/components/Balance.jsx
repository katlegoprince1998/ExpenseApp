import React, { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../constext/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transactions => parseInt(transactions.amount));
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='grid bg-heading w-32 rounded-md shadow-2xl p-2 justify-center'>
       <h1 className='text-mono text-sm font-extrabold text-gray-500'>Balance</h1>
       <span className='text-mono text-xl text-green-600 font-bold'>R{total}</span>
    </div>
  )
}

export default Balance
