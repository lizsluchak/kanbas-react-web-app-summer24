import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // init state variable count to 0
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducer functions
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
},
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
