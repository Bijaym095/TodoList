import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "../components/Todo/TodoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
