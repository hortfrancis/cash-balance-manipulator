import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balance';

export default configureStore({
    reducer: {
        balance: balanceReducer, 
    },
});