// GlobalProvider.js
import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import { database } from '../config/config';
import { collection, getDocs } from 'firebase/firestore';

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, "expense-track"));
                const transactionsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                dispatch({ type: 'SET_TRANSACTIONS', payload: transactionsData });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, loading }}>
            {children}
        </GlobalContext.Provider>
    );
};
