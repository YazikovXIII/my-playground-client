import { useSelector } from "react-redux";
import { TodosItem } from "../TodosItem/TodosItem";
import { StyledTodosList } from "./TodosList.styled";
import { getTodos } from "../../../redux/todos/todosSelector";

export const TodosList = () => {
  const todos = useSelector(getTodos);
  return (
    <StyledTodosList>
      {todos.map((todo) => (
        <TodosItem todo={todo} key={todo.id} />
      ))}
    </StyledTodosList>
  );
};
