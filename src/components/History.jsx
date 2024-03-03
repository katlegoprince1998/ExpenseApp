import React from 'react'

const History = () => {
  return (
    <div className='mt-10 shadow-2xl p-2'>
       <h1 className='text-heading justify-center flex text-mono font-bold'>History</h1>
       <div className='mt-10'>
        <div className='flex justify-around'>
            <h4 className='text-mono font-bold text-gray-600'>Name:</h4>
            <h4 className='text-mono font-bold text-gray-600 '>Amount</h4>
        </div>
        <div className='flex justify-between w-60 shadow-2xl bg-heading p-2 rounded-md m-4'>
            <h4 className='text-mono font-bold text-gray-600 '>Book</h4>
            <h4>20</h4>
        </div>
       </div>
    </div>
  )
}

export default History
