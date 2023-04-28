import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import TodoList from "./TodoList";

import { addTask, deleteTask, editTask } from "./TodoSlice";

const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(null);
  const [editingIndex, setIsEditingIndex] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const todoLists = useSelector((state) => state.todo.lists);
  const dispatch = useDispatch();

  const todoSubmitHandler = (data) => {
    if (data.todoInput !== "") {
      if (!isEditing) {
        dispatch(addTask(data.todoInput));
      } else {
        dispatch(editTask({ editingIndex, editingValue: data.todoInput }));
        setIsEditing(false);
        setIsEditingIndex(null);
        setEditingValue(null);
      }
    }

    reset();
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (list, index) => {
    setIsEditing(true);
    setEditingValue(list);
    setIsEditingIndex(index);
  };

  return (
    <div>
      <form className="mb-4" onSubmit={handleSubmit(todoSubmitHandler)}>
        <input
          className="form-input rounded-lg"
          {...register("todoInput", { required: true })}
          type="text"
          defaultValue={isEditing ? editingValue : ""}
        />

        <button
          className="bg-red-400 font-medium text-white py-2 px-4 ml-2 rounded-lg hover:bg-red-500 duration-300"
          type="submit"
        >
          {isEditing ? "Edit" : "Submit"}
        </button>
      </form>

      <h2 className="font-bold">Tasks</h2>

      {todoLists.length === 0 && todoLists.length < 0 ? (
        <p>No Task Added</p>
      ) : (
        <TodoList
          lists={todoLists}
          onDelete={handleDelete}
          onEdit={handleEdit}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default Todo;
