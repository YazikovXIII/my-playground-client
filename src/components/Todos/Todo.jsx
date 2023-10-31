import { TodosForm } from "./TodosForm/TodosForm";
import { TodosList } from "./TodosList/TodosList";
import { TodosWrapper } from "./Todo.styled";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { addTodo } from "../../redux/todos/todosOperations";

export const Todo = () => {
  const [textValue, setValue] = useState("");
  const dispatch = useDispatch();
  const formButtonText = "Add todo";
  const placeholderText = "Enter text";

  const addTask = async () => {
    try {
      const credential = { todo: textValue };
      const response = await dispatch(addTodo(credential));
      if (response.error) {
        const error = new Error(response.payload.data.message);
        error.status = response.status;
        throw error;
      }
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodosWrapper>
      <TodosForm
        value={textValue}
        handleSubmit={addTask}
        handleChange={setValue}
        buttonText={formButtonText}
        placeholder={placeholderText}
      />
      <TodosList />
    </TodosWrapper>
  );
};
