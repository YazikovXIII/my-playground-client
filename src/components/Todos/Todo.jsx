import { TodosForm } from "./TodosForm/TodosForm";
import { TodosList } from "./TodosList/TodosList";
import { TodosWrapper } from "./Todo.styled";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todosSlice";
import { useState } from "react";

export const Todo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const formButtonText = "Add todo";
  const placeholderText = "Enter text";
  const addTask = () => {
    dispatch(addTodo(value)), setValue("");
  };

  return (
    <TodosWrapper>
      <TodosForm
        value={value}
        handleSubmit={addTask}
        handleChange={setValue}
        buttonText={formButtonText}
        placeholder={placeholderText}
      />
      <TodosList />
    </TodosWrapper>
  );
};
