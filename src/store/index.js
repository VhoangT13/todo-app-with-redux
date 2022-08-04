import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlide";

const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});

export default store;
