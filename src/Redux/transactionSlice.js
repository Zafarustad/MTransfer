import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit';
import transactionData from '../Data/transactionData';

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    balance: '200000',
    transactions: [...transactionData],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload);
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const {addTransaction, setBalance} = transactionSlice.actions;

export default transactionSlice.reducer;
