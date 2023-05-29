import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.unshift(action.payload);
    },
    removeTodo(state, action) {
      const index = state.map((item) => item.id).indexOf(action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCompleted(state, action) {
      const index = state.map((item) => item.id).indexOf(action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
    deActivate(state, action) {
      const index = state.map((item) => item.id).indexOf(action.payload);
      if (index !== -1) {
        state[index].isActive = !state[index].isActive;
      }
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
