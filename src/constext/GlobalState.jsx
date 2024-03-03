import React, { createContext , useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id:1, trans: "Book", transType: "income", amount: 10},
        {id:1, trans: "Book", transType: "expense", amount: 10}
        
    ]
}

// create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    const addTransaction = transaction => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
   
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}