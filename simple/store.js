import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

// configure store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
