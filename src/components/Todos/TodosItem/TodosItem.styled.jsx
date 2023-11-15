import styled from "styled-components";

// li input span button

export const StyledLI = styled.li`
  align-items: center;
  display: flex;
  gap: 10px;
  width: 320px;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-primary-dark);
  padding: 0 10px;
`;

export const StyledInput = styled.input`
  margin: 0;
  padding: 0;
  width: 14px;
  height: 14px;
  appearance: none;
  background: transparent;
  border: 2px solid var(--color-primary-dark);
  border-radius: 7px;
  &:hover {
    cursor: pointer;
  }
  &:checked {
    background: var(--color-primary-dark);
  }
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  width: 250px;
`;

export const StyledDelBtn = styled.button`
  font-size: 20px;
  color: var(--color-primary-dark);
  background-color: transparent;
  border: none;
  transition: 300ms ease-out;
  &:hover {
    cursor: pointer;
    color: var(--color-reject);
    transform: scale(1.5);
  }
`;
