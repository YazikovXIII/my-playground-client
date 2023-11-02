import styled from "styled-components";

// li input span button

export const StyledLI = styled.li`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 10px;
  height: 10px;
  appearance: none;
  background: transparent;
  border: 2px solid var(--color-primary-dark);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:checked {
    background: var(--color-primary-dark);
  }
`;

export const StyledSpan = styled.span`
  font-size: 20px;
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
