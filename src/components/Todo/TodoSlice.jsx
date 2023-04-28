import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    lists: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.lists.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.lists = state.lists.filter(
        (list, index) => index !== action.payload
      );
    },

    editTask: (state, action) => {
      const { editingIndex, editingValue } = action.payload;
      state.lists = state.lists.map((task, i) =>
        i === editingIndex ? editingValue : task
      );
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
