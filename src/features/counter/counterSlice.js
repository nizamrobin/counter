import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      state[counterIndex].value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
