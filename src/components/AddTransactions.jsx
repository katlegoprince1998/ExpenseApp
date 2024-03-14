import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../constext/GlobalState';
import { database } from '../config/config';
import { addDoc, collection, getDoc} from 'firebase/firestore';


const AddTransactions = () => {
    const [transType , setTransType] = useState("");
    const [transname, setTransName] = useState("");
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const value = collection(database, "expense-track");

    const handleForm = async(e) => {
       e.preventDefault();
       await addDoc(value, {transname:transname, transType:transType, amount:amount})
    }
    
    return (
        <form className='mt-10 shadow-2xl p-2'>
            <h1 className='text-heading justify-center flex text-mono font-bold'>Add Transaction</h1>
            <div className='mt-10'>
                <div className='grid m-5'>
                    <label className='text-gray-400 text-mono font-bold' htmlFor="transName">Trans name</label>
                    <input value={transname} onChange={(e) => setTransName(e.target.value)} className='h-8 shadow-lg rounded-md bg-gray-700 text-heading' type="text" name="trans" id="transName" />
                </div>
                <div className='grid m-5'>
                    <label className='text-gray-400 text-mono font-bold' htmlFor="transType">Trans Type</label>
                    <select value={transType} onChange={(e) => setTransType(e.target.value)} className='h-8 shadow-lg rounded-md bg-gray-700 text-heading' name="trans" id="transType" >
                        <option value="" disabled>Select trans type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className='grid m-5'>
                    <label className='text-gray-400 text-mono font-bold' htmlFor="transType">Amount</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className='h-8 shadow-lg rounded-md bg-gray-700 text-heading' type="text" name="trans" id="amount" />
                </div>
                <button onClick={handleForm} type='submit' className='bg-heading px-4 py-1 shadow-2xl text-primary font-bold hover:bg-green-600 hover:text-heading rounded-md w-60 m-4'>Add Trans</button>
            </div>

        </form>
    )
}

export default AddTransactions
