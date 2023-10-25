import { StyledTodosButton, TodosFormWrapper, TodosStyledInput } from "./TodosForm.styled";

export const TodosForm = ({ value, handleChange, handleSubmit, buttonText, placeholder }) => {
  return (
    <TodosFormWrapper>
      <TodosStyledInput
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        id="input"
        value={value}
      />
      <StyledTodosButton type="button" onClick={handleSubmit}>
        {buttonText}
      </StyledTodosButton>
    </TodosFormWrapper>
  );
};
