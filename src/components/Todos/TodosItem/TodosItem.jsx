import { useDispatch } from "react-redux";
import { StyledDelBtn, StyledInput, StyledLI, StyledSpan } from "./TodosItem.styled";
import { removeTodo, toggleTodoComplete } from "../../../redux/todos/todosSlice";

export const TodosItem = ({ todo }) => {
  const dispatch = useDispatch();

  const checkTaskCompleted = () => dispatch(toggleTodoComplete(todo.id));

  const deleteTodo = () => dispatch(removeTodo(todo.id));
  return (
    <StyledLI>
      <StyledInput type="checkbox" checked={todo.completed} onChange={() => checkTaskCompleted()} />
      <StyledSpan>{todo.value}</StyledSpan>
      <StyledDelBtn
        style={{ color: "red", backgroundColor: "transparent", border: "none" }}
        type="button"
        onClick={() => deleteTodo()}
      >
        ×
      </StyledDelBtn>
    </StyledLI>
  );
};
