import { useDispatch } from "react-redux";
import { StyledDelBtn, StyledInput, StyledLI, StyledSpan } from "./TodosItem.styled";
import { removeTodo } from "../../../redux/todos/todosOperations";

export const TodosItem = ({ todo }) => {
  const dispatch = useDispatch();
  const checkTaskCompleted = () => {};
  const id = todo._id;
  const value = todo.todo;
  console.log(value);

  const handleSubmit = async () => {
    try {
      const action = await dispatch(removeTodo(id));
      console.log("handlesubmit-action", action);
      if (action.error) {
        const error = new Error(action.payload.data.message);
        error.status = action.error.status;
        throw error;
      }
    } catch (error) {
      console.log("handlesubmit-error", error);
    }
  };
  return (
    <StyledLI>
      <StyledInput type="checkbox" checked={todo.completed} onChange={() => checkTaskCompleted()} />
      <StyledSpan>{value}</StyledSpan>
      <StyledDelBtn
        style={{ color: "red", backgroundColor: "transparent", border: "none" }}
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        ×
      </StyledDelBtn>
    </StyledLI>
  );
};
