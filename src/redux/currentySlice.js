import { createSlice } from '@reduxjs/toolkit';

const baseCurrentySlice = createSlice({
  name: 'currency',
  initialState: '',

  reducers: {
    setCurrency(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setCurrency } = baseCurrentySlice.actions;

export const currencyReducer = baseCurrentySlice.reducer;
