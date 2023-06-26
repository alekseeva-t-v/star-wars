import { createSlice } from '@reduxjs/toolkit';

const initialState = { numberOfFacts: 0, isValidnumber: true };

const numberSlice = createSlice({
  name: 'numberOfFacts',
  initialState: initialState,
  reducers: {
    showing(state, action) {
      state.numberOfFacts = action.payload;
    },
    notValid(state) {
      state.isValidnumber = false;
    },
    valid(state) {
      state.isValidnumber = true;
    }
  },
});

export const numberActions = numberSlice.actions;

export default numberSlice;
