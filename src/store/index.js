import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlide";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: { todo: todoSlice.reducer, filter: filterSlice.reducer },
});

export default store;
