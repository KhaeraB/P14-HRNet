import { createSlice } from '@reduxjs/toolkit';

const  rootReducer = createSlice({
  name: 'values',
  initialState: [],
  reducers: {
    addValue(state, action) {
      state.push(action.payload);
    },
    updateValue(state, action) {
      const index = state.findIndex(value => value.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteValue(state, action) {
      const index = state.findIndex(value => value.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addValue, updateValue, deleteValue } =  rootReducer.actions;