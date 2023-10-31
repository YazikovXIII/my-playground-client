import { useDispatch, useSelector } from "react-redux";
import { TodosItem } from "../TodosItem/TodosItem";
import { StyledTodosList } from "./TodosList.styled";
import { getTodosList } from "../../../redux/todos/todosSelector";
import { useEffect } from "react";
import { getTodos } from "../../../redux/todos/todosOperations";

export const TodosList = () => {
  const todos = useSelector(getTodosList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <StyledTodosList>
      {todos.map((todo) => (
        <TodosItem todo={todo} key={todo._id} />
      ))}
    </StyledTodosList>
  );
};
