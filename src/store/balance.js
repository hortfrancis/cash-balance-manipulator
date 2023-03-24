import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
    name: 'balance',

    initialState: {
        value: 0
    },

    reducers: {

        // Linked to the 'Deposit' <button> App.js
        increaseByAmount: (state, action) => {
            state.value += action.payload;
        }, 

        // Linked to the 'Withdraw' <button> in App.js
        decreaseByAmount: (state, action) => {
            state.value -= action.payload;

        }, 

        // Linked to the 'Add Interest' <button> in App.js
        increaseBy5Percent: (state) => {
            // Check the balance is not at a negative amount
            if (state.value > 0) state.value += (state.value * 0.05);
        }, 

        // Linked to the 'Charges' <button> in App.js
        decreaseBy15Percent: (state) => {
            // Check the balance is not at a negative amount
            if (state.value > 0) state.value -= (state.value * 0.15);
        }

    }

})

export const { increaseByAmount, decreaseByAmount, increaseBy5Percent, decreaseBy15Percent } = balanceSlice.actions;


export default balanceSlice.reducer;