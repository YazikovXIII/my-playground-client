import styled from "styled-components";

// div label input button

export const TodosFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const TodosStyledInput = styled.input`
  text-align: center;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid var(--color-primary-dark);
  font-family: "DM Mono", monospace;
  line-height: 1.5;
  font-weight: 400;
  font-size: 16px;
  padding: 8px;
  outline: none;
  color: var(--color-primary-dark);
  &::placeholder {
    text-align: center;
    font-family: "DM Mono", monospace;
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-primary-dark);
    opacity: 0.8;
  }
`;

export const StyledTodosButton = styled.button`
  padding: 0 10px;
  background-color: transparent;
  font-family: "DM Mono", monospace;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 5px;
  font-size: 16px;
  background-color: var(--color-primary-dark);
  color: var(--color-secondary-light);
  border: 2px solid var(--color-primary-dark);
  transition: 300ms ease-out;
  &:hover {
    transform: scale(1.1);

    cursor: pointer;
  }
`;
