import React, { useReducer } from 'react'
import { alertReducers } from './alertReducer';
import { createContext, useContext } from 'react';


const alertContext = createContext();
export const GetAlertContext = () => {
    return useContext(alertContext);
} 
const AlertContextProvider = ({children}) => {
    const initialState = null;
    const [state, dispatch] = useReducer(alertReducers, initialState);
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        });
        
        setTimeout(()=> dispatch({type: 'RESET_ALERT'}),3000);
    }
    return  <alertContext.Provider 
    value={{ 
        alert: state, 
        setAlert 
    }}> 
        {children}
    </alertContext.Provider>
}

export default AlertContextProvider