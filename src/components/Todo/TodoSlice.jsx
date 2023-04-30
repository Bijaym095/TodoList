import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    lists: [],
  },
  reducers: {
    addTask: (state, action) => {
      return { ...state, lists: [...state.lists, action.payload] };
    },

    deleteTask: (state, action) => {
      return {
        ...state,
        lists: state.lists.filter((list, i) => i !== action.payload),
      };
    },

    editTask: (state, action) => {
      const { editingIndex, editingValue } = action.payload;

      return {
        ...state,
        lists: state.lists.map((task, i) =>
          i === editingIndex ? editingValue : task
        ),
      };
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
