import styled from "styled-components";

// div label input button

export const TodosFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const TodosStyledInput = styled.input`
  background-color: transparent;
  border: 1px solid green;
  font-size: 16px;
  color: green;
  &::placeholder {
    color: green;
    opacity: 0.8;
  }
`;

export const StyledTodosButton = styled.button`
  background-color: transparent;
  color: green;
  border: 1px solid green;
  transition: 300ms ease-out;
  &:hover {
    background-color: green;
    color: black;
    cursor: pointer;
  }
`;
