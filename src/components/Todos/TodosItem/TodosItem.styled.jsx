import styled from "styled-components";

// li input span button

export const StyledLI = styled.li`
  display: flex;
  gap: 10px;
`;

export const StyledInput = styled.input`
  background-color: transparent;
`;

export const StyledSpan = styled.span`
  font-size: 20px;
`;

export const StyledDelBtn = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  transition: 300ms ease-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
