import React, { useContext } from 'react';
import { GlobalContext } from '../constext/GlobalState';

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='mt-10 shadow-2xl p-2'>
      <h1 className='text-heading justify-center flex text-mono font-bold'>History</h1>
      <div className='mt-10'>
        <div className='flex justify-around'>
          <h4 className='text-mono font-bold text-gray-600'>Name:</h4>
          <h4 className='text-mono font-bold text-gray-600 '>Amount</h4>
        </div>
        {
          transactions.map(transaction => {
            if (transaction.transType === 'income') {
              return (
                <div key={transaction.id} className='flex justify-between w-60 shadow-2xl bg-green-600 p-2 rounded-md m-4'>
                  <h4 className='text-mono font-bold text-gray-200'>{transaction.trans}</h4>
                  <h4  className='italic text-heading font-extrabold'>R<span>{transaction.amount}</span></h4>
                </div>
              );
            } else {
              return (
                <div key={transaction.id} className='flex justify-between w-60 shadow-2xl bg-red-600 p-2 rounded-md m-4'>
                  <h4 className='text-mono font-bold text-gray-200'>{transaction.trans}</h4>
                  <h4 className='italic text-heading font-extrabold'>R<span>{transaction.amount}</span></h4>
                </div>
              );
            }
          })
        }

      </div>
    </div>
  )
}

export default History
